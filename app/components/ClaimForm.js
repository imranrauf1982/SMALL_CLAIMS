'use client'
import { useState, useCallback, memo } from 'react'
import { CLAIM_TYPES } from '../lib/states'

const STEPS = ['Your info', 'Defendant', 'Claim details', 'Download']

// Memoized field wrapper — prevents re-render of other fields when one changes
const FormField = memo(({ id, label, req, hint, error, children }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}{req && <span className="req" aria-hidden="true"> *</span>}</label>
    {children}
    {hint && <span className="field-hint">{hint}</span>}
    {error && <span className="field-error" role="alert">{error}</span>}
  </div>
))
FormField.displayName = 'FormField'

// Memoized individual inputs — only re-render when their own value/error changes
const TextInput = memo(({ id, value, onChange, placeholder, type = 'text', autoComplete, maxLength }) => (
  <input
    id={id}
    type={type}
    value={value}
    onChange={e => onChange(id, e.target.value)}
    placeholder={placeholder}
    autoComplete={autoComplete}
    maxLength={maxLength}
  />
))
TextInput.displayName = 'TextInput'

const SelectInput = memo(({ id, value, onChange, children }) => (
  <select id={id} value={value} onChange={e => onChange(id, e.target.value)}>
    {children}
  </select>
))
SelectInput.displayName = 'SelectInput'

const TextareaInput = memo(({ id, value, onChange, placeholder }) => (
  <textarea
    id={id}
    value={value}
    onChange={e => onChange(id, e.target.value)}
    placeholder={placeholder}
    style={{ minHeight: '150px' }}
  />
))
TextareaInput.displayName = 'TextareaInput'

export default function ClaimForm({ state }) {
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [errors, setErrors] = useState({})

  const [form, setForm] = useState({
    plaintiffName: '', plaintiffAddress: '', plaintiffCity: '',
    plaintiffState: state.abbr, plaintiffZip: '', plaintiffPhone: '', plaintiffEmail: '',
    defendantName: '', defendantAddress: '', defendantCity: '',
    defendantState: state.abbr, defendantZip: '', defendantPhone: '',
    claimType: '', incidentDate: '', amountClaimed: '',
    claimStatement: '',
  })

  // useCallback so the function reference stays stable — prevents child re-renders
  const handleChange = useCallback((field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => {
      if (!prev[field]) return prev // no change needed
      const next = { ...prev }
      delete next[field]
      return next
    })
  }, [])

  function validate() {
    const e = {}
    if (step === 0) {
      if (!form.plaintiffName.trim()) e.plaintiffName = 'Required'
      if (!form.plaintiffAddress.trim()) e.plaintiffAddress = 'Required'
      if (!form.plaintiffCity.trim()) e.plaintiffCity = 'Required'
      if (!form.plaintiffZip.trim()) e.plaintiffZip = 'Required'
    }
    if (step === 1) {
      if (!form.defendantName.trim()) e.defendantName = 'Required'
      if (!form.defendantAddress.trim()) e.defendantAddress = 'Required'
      if (!form.defendantCity.trim()) e.defendantCity = 'Required'
    }
    if (step === 2) {
      if (!form.claimType) e.claimType = 'Required'
      if (!form.incidentDate) e.incidentDate = 'Required'
      if (!form.amountClaimed || isNaN(form.amountClaimed) || parseFloat(form.amountClaimed) <= 0) e.amountClaimed = 'Enter a valid amount'
      if (parseFloat(form.amountClaimed) > state.limit) e.amountClaimed = `Exceeds ${state.name} limit of $${state.limit.toLocaleString()}`
      if (!form.claimStatement.trim() || form.claimStatement.trim().length < 30) e.claimStatement = 'Please describe what happened (min 30 characters)'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function next() { if (validate()) setStep(s => s + 1) }
  function back() { setStep(s => s - 1); setErrors({}) }

  async function handleGenerate() {
    if (!validate()) return
    setLoading(true)
    try {
      // Optional Supabase analytics — wrapped in try so it never blocks PDF
      try {
        const { supabase } = await import('../lib/supabase')
        await supabase.from('claims').insert({
          state: state.abbr,
          claim_type: form.claimType,
          amount: parseFloat(form.amountClaimed),
          created_at: new Date().toISOString(),
        })
      } catch {}

      const { generateSmallClaimsPDF } = await import('../lib/generatePDF')
      await generateSmallClaimsPDF(form, state)
      setDone(true)
    } catch (err) {
      console.error(err)
      alert('Error generating PDF. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function resetForm() {
    setDone(false)
    setStep(0)
    setErrors({})
    setForm({
      plaintiffName: '', plaintiffAddress: '', plaintiffCity: '',
      plaintiffState: state.abbr, plaintiffZip: '', plaintiffPhone: '', plaintiffEmail: '',
      defendantName: '', defendantAddress: '', defendantCity: '',
      defendantState: state.abbr, defendantZip: '', defendantPhone: '',
      claimType: '', incidentDate: '', amountClaimed: '', claimStatement: '',
    })
  }

  return (
    <div>
      {/* Steps */}
      <div className="steps" role="list" aria-label="Form steps">
        {STEPS.map((s, i) => (
          <div key={s} role="listitem" className={`step${i === step ? ' active' : ''}${i < step ? ' done' : ''}`}>
            <div className="step-circle" aria-current={i === step ? 'step' : undefined}>
              {i < step ? '✓' : i + 1}
            </div>
            <div className="step-label">{s}</div>
          </div>
        ))}
      </div>

      <div className="form-card">

        {/* STEP 0 — Plaintiff */}
        {step === 0 && (
          <div>
            <div className="form-section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Your information (plaintiff)
            </div>
            <div className="info-box" style={{ marginBottom: '1.5rem' }}>
              <p>This is you — the person filing. Fill in your full legal name exactly as it appears on your ID.</p>
            </div>
            <div className="form-grid">
              <FormField id="plaintiffName" label="Your full legal name" req error={errors.plaintiffName}>
                <TextInput id="plaintiffName" value={form.plaintiffName} onChange={handleChange} placeholder="Jane Smith" autoComplete="name" />
              </FormField>
              <FormField id="plaintiffPhone" label="Phone number" error={errors.plaintiffPhone}>
                <TextInput id="plaintiffPhone" value={form.plaintiffPhone} onChange={handleChange} placeholder="(555) 000-0000" type="tel" autoComplete="tel" />
              </FormField>
              <FormField id="plaintiffEmail" label="Email address" error={errors.plaintiffEmail}>
                <TextInput id="plaintiffEmail" value={form.plaintiffEmail} onChange={handleChange} placeholder="jane@email.com" type="email" autoComplete="email" />
              </FormField>
              <FormField id="plaintiffAddress" label="Street address" req error={errors.plaintiffAddress}>
                <TextInput id="plaintiffAddress" value={form.plaintiffAddress} onChange={handleChange} placeholder="123 Main St" autoComplete="street-address" />
              </FormField>
              <FormField id="plaintiffCity" label="City" req error={errors.plaintiffCity}>
                <TextInput id="plaintiffCity" value={form.plaintiffCity} onChange={handleChange} placeholder="Springfield" autoComplete="address-level2" />
              </FormField>
              <FormField id="plaintiffZip" label="ZIP code" req error={errors.plaintiffZip}>
                <TextInput id="plaintiffZip" value={form.plaintiffZip} onChange={handleChange} placeholder="12345" maxLength={10} />
              </FormField>
            </div>
          </div>
        )}

        {/* STEP 1 — Defendant */}
        {step === 1 && (
          <div>
            <div className="form-section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              Defendant information
            </div>
            <div className="info-box" style={{ marginBottom: '1.5rem' }}>
              <h4>⚠️ Getting the name right is critical</h4>
              <ul>
                <li>For individuals: use their full legal name (not a nickname)</li>
                <li>For businesses: use their full registered business name</li>
                <li>For landlords: use the name on your lease</li>
              </ul>
            </div>
            <div className="form-grid">
              <FormField id="defendantName" label="Defendant full name or business name" req error={errors.defendantName}>
                <TextInput id="defendantName" value={form.defendantName} onChange={handleChange} placeholder="John Doe or Doe Contracting LLC" />
              </FormField>
              <FormField id="defendantPhone" label="Defendant phone (if known)" error={errors.defendantPhone}>
                <TextInput id="defendantPhone" value={form.defendantPhone} onChange={handleChange} placeholder="(555) 000-0000" type="tel" />
              </FormField>
              <FormField id="defendantAddress" label="Defendant street address" req error={errors.defendantAddress}>
                <TextInput id="defendantAddress" value={form.defendantAddress} onChange={handleChange} placeholder="456 Oak Ave" />
              </FormField>
              <FormField id="defendantCity" label="City" req error={errors.defendantCity}>
                <TextInput id="defendantCity" value={form.defendantCity} onChange={handleChange} placeholder="Springfield" />
              </FormField>
              <FormField id="defendantZip" label="ZIP code" error={errors.defendantZip}>
                <TextInput id="defendantZip" value={form.defendantZip} onChange={handleChange} placeholder="12345" maxLength={10} />
              </FormField>
            </div>
          </div>
        )}

        {/* STEP 2 — Claim */}
        {step === 2 && (
          <div>
            <div className="form-section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Claim details
            </div>
            <div className="form-grid">
              <FormField id="claimType" label="Type of claim" req error={errors.claimType}>
                <SelectInput id="claimType" value={form.claimType} onChange={handleChange}>
                  <option value="">Select claim type…</option>
                  {CLAIM_TYPES.map(ct => <option key={ct.value} value={ct.label}>{ct.label}</option>)}
                </SelectInput>
              </FormField>
              <FormField id="incidentDate" label="Date of incident" req error={errors.incidentDate}>
                <TextInput id="incidentDate" value={form.incidentDate} onChange={handleChange} type="date" />
              </FormField>
              <FormField id="amountClaimed" label="Amount you are claiming ($)" req hint={`${state.name} limit: $${state.limit.toLocaleString()}`} error={errors.amountClaimed}>
                <TextInput id="amountClaimed" value={form.amountClaimed} onChange={handleChange} placeholder="0.00" type="number" />
              </FormField>
            </div>
            <FormField id="claimStatement" label="Describe what happened" req hint="Be specific: what happened, when, what you lost, what the defendant did or failed to do." error={errors.claimStatement}>
              <TextareaInput
                id="claimStatement"
                value={form.claimStatement}
                onChange={handleChange}
                placeholder="Example: On [date], I hired the defendant to repair my roof for $2,400. I paid $1,200 upfront. The defendant completed only 20% of the work and stopped responding to my messages on [date]. I am claiming $1,200 for breach of contract."
              />
            </FormField>
          </div>
        )}

        {/* STEP 3 — Download */}
        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            {!done ? (
              <>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div>
                <h3 style={{ marginBottom: '0.75rem' }}>Your form is ready to generate</h3>
                <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', fontSize: '0.9375rem', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
                  Review your info using the Back button, then click below to download your PDF.
                </p>
                <div style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.5rem', textAlign: 'left' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <div><span style={{ color: 'var(--gray-500)' }}>Plaintiff:</span> <strong>{form.plaintiffName}</strong></div>
                    <div><span style={{ color: 'var(--gray-500)' }}>Defendant:</span> <strong>{form.defendantName}</strong></div>
                    <div><span style={{ color: 'var(--gray-500)' }}>Amount:</span> <strong>${parseFloat(form.amountClaimed || 0).toLocaleString()}</strong></div>
                    <div><span style={{ color: 'var(--gray-500)' }}>State:</span> <strong>{state.name}</strong></div>
                  </div>
                </div>
                <button className="btn-generate" onClick={handleGenerate} disabled={loading}>
                  {loading ? (
                    <>
                      <svg style={{ animation: 'spin 1s linear infinite' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity=".25"/><path d="M21 12a9 9 0 01-9 9" strokeLinecap="round"/></svg>
                      Generating your PDF…
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/></svg>
                      Download my PDF — Free
                    </>
                  )}
                </button>
              </>
            ) : (
              <div className="success-card">
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✅</div>
                <h3>Your PDF has been downloaded!</h3>
                <p style={{ marginBottom: '1rem' }}>Check your Downloads folder for your small claims complaint form.</p>
                <div style={{ background: 'white', border: '1px solid rgba(15,110,86,0.2)', borderRadius: 'var(--radius-sm)', padding: '1rem', textAlign: 'left', marginBottom: '1rem' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--green)', marginBottom: '0.5rem' }}>✅ Next steps:</p>
                  <ol style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', color: '#0a5040', lineHeight: 1.75 }}>
                    <li>Print 3 copies of the PDF</li>
                    <li>Call your local {state.court} to confirm filing fee</li>
                    <li>File at the courthouse and pay the fee</li>
                    <li>The court will mail you a hearing date</li>
                    <li>Serve the defendant as the clerk instructs</li>
                    <li>Show up to your hearing with all evidence</li>
                  </ol>
                </div>
                <button onClick={resetForm} style={{ background: 'none', border: '1px solid var(--green)', color: 'var(--green)', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem' }}>
                  Start a new form
                </button>
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', justifyContent: 'space-between', alignItems: 'center' }}>
          {step > 0 && !done && (
            <button onClick={back} style={{ background: 'none', border: '1.5px solid var(--gray-300)', color: 'var(--gray-600)', padding: '0.7rem 1.5rem', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 600, fontSize: '0.9375rem', fontFamily: 'var(--font-sans)' }}>
              ← Back
            </button>
          )}
          {step < 3 && (
            <button onClick={next} style={{ background: 'var(--navy)', color: 'white', border: 'none', padding: '0.75rem 2rem', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 700, fontSize: '0.9375rem', fontFamily: 'var(--font-sans)', marginLeft: 'auto' }}>
              Continue →
            </button>
          )}
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}

'use client'
import { useState } from 'react'
import { CLAIM_TYPES } from '../lib/states'
import { supabase } from '../lib/supabase'

const STEPS = ['Your info', 'Defendant', 'Claim details', 'Download']

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

  function set(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: undefined }))
  }

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

  function next() {
    if (validate()) setStep(s => s + 1)
  }

  function back() {
    setStep(s => s - 1)
    setErrors({})
  }

  async function handleGenerate() {
    if (!validate()) return
    setLoading(true)
    try {
      // Save to Supabase (optional — doesn't block PDF)
      try {
        await supabase.from('claims').insert({
          state: state.abbr,
          claim_type: form.claimType,
          amount: parseFloat(form.amountClaimed),
          created_at: new Date().toISOString(),
        })
      } catch {}

      // Generate PDF client-side
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

  const F = ({ id, label, req, hint, error, children }) => (
    <div className="form-group">
      <label htmlFor={id}>{label}{req && <span className="req" aria-hidden="true"> *</span>}</label>
      {children}
      {hint && <span className="field-hint">{hint}</span>}
      {(error || errors[id]) && <span className="field-error" role="alert">{error || errors[id]}</span>}
    </div>
  )

  return (
    <div>
      {/* Steps indicator */}
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
              <p>This is you — the person filing the case. Fill in your full legal name and contact details exactly as they appear on your ID.</p>
            </div>
            <div className="form-grid">
              <F id="plaintiffName" label="Your full legal name" req>
                <input id="plaintiffName" type="text" value={form.plaintiffName} onChange={e => set('plaintiffName', e.target.value)} placeholder="Jane Smith" autoComplete="name" />
              </F>
              <F id="plaintiffPhone" label="Phone number">
                <input id="plaintiffPhone" type="tel" value={form.plaintiffPhone} onChange={e => set('plaintiffPhone', e.target.value)} placeholder="(555) 000-0000" autoComplete="tel" />
              </F>
              <F id="plaintiffEmail" label="Email address">
                <input id="plaintiffEmail" type="email" value={form.plaintiffEmail} onChange={e => set('plaintiffEmail', e.target.value)} placeholder="jane@email.com" autoComplete="email" />
              </F>
              <F id="plaintiffAddress" label="Street address" req className="full">
                <input id="plaintiffAddress" type="text" value={form.plaintiffAddress} onChange={e => set('plaintiffAddress', e.target.value)} placeholder="123 Main St" autoComplete="street-address" />
              </F>
              <F id="plaintiffCity" label="City" req>
                <input id="plaintiffCity" type="text" value={form.plaintiffCity} onChange={e => set('plaintiffCity', e.target.value)} placeholder="Springfield" autoComplete="address-level2" />
              </F>
              <F id="plaintiffZip" label="ZIP code" req>
                <input id="plaintiffZip" type="text" value={form.plaintiffZip} onChange={e => set('plaintiffZip', e.target.value)} placeholder="12345" autoComplete="postal-code" maxLength={10} />
              </F>
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
                <li>For businesses: use their full registered business name (check your receipt or contract)</li>
                <li>For landlords: use the name on your lease — could be a person or an LLC</li>
              </ul>
            </div>
            <div className="form-grid">
              <F id="defendantName" label="Defendant full name or business name" req>
                <input id="defendantName" type="text" value={form.defendantName} onChange={e => set('defendantName', e.target.value)} placeholder="John Doe or Doe Contracting LLC" />
              </F>
              <F id="defendantPhone" label="Defendant phone (if known)">
                <input id="defendantPhone" type="tel" value={form.defendantPhone} onChange={e => set('defendantPhone', e.target.value)} placeholder="(555) 000-0000" />
              </F>
              <F id="defendantAddress" label="Defendant street address" req>
                <input id="defendantAddress" type="text" value={form.defendantAddress} onChange={e => set('defendantAddress', e.target.value)} placeholder="456 Oak Ave" />
              </F>
              <F id="defendantCity" label="City" req>
                <input id="defendantCity" type="text" value={form.defendantCity} onChange={e => set('defendantCity', e.target.value)} placeholder="Springfield" />
              </F>
              <F id="defendantZip" label="ZIP code">
                <input id="defendantZip" type="text" value={form.defendantZip} onChange={e => set('defendantZip', e.target.value)} placeholder="12345" maxLength={10} />
              </F>
            </div>
          </div>
        )}

        {/* STEP 2 — Claim */}
        {step === 2 && (
          <div>
            <div className="form-section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              Claim details
            </div>
            <div className="form-grid">
              <F id="claimType" label="Type of claim" req>
                <select id="claimType" value={form.claimType} onChange={e => set('claimType', e.target.value)}>
                  <option value="">Select claim type…</option>
                  {CLAIM_TYPES.map(ct => <option key={ct.value} value={ct.label}>{ct.label}</option>)}
                </select>
              </F>
              <F id="incidentDate" label="Date of incident / event" req>
                <input id="incidentDate" type="date" value={form.incidentDate} onChange={e => set('incidentDate', e.target.value)} max={new Date().toISOString().split('T')[0]} />
              </F>
              <F id="amountClaimed" label={`Amount you are claiming ($)`} req hint={`${state.name} limit: $${state.limit.toLocaleString()}`}>
                <input id="amountClaimed" type="number" min="1" max={state.limit} value={form.amountClaimed} onChange={e => set('amountClaimed', e.target.value)} placeholder="0.00" />
              </F>
            </div>
            <F id="claimStatement" label="Describe what happened" req hint="Be specific: what happened, when, what you lost, and what the defendant did or failed to do. Judges read this.">
              <textarea
                id="claimStatement"
                value={form.claimStatement}
                onChange={e => set('claimStatement', e.target.value)}
                placeholder={`Example: On [date], I hired the defendant to repair my roof for $2,400. I paid $1,200 upfront. The defendant completed only 20% of the work and stopped responding to my messages on [date]. Despite multiple attempts to resolve this, the defendant has refused to return my money or complete the work. I am claiming $1,200 for breach of contract.`}
                style={{ minHeight: '150px' }}
              />
            </F>
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
                  Review your information using the back button, then click below to download your ready-to-file PDF.
                </p>
                <div style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.5rem', textAlign: 'left' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <div><span style={{ color: 'var(--gray-500)' }}>Plaintiff:</span> <strong>{form.plaintiffName}</strong></div>
                    <div><span style={{ color: 'var(--gray-500)' }}>Defendant:</span> <strong>{form.defendantName}</strong></div>
                    <div><span style={{ color: 'var(--gray-500)' }}>Amount:</span> <strong>${parseFloat(form.amountClaimed || 0).toLocaleString()}</strong></div>
                    <div><span style={{ color: 'var(--gray-500)' }}>State:</span> <strong>{state.name}</strong></div>
                    <div><span style={{ color: 'var(--gray-500)' }}>Claim type:</span> <strong>{form.claimType}</strong></div>
                    <div><span style={{ color: 'var(--gray-500)' }}>Date:</span> <strong>{form.incidentDate}</strong></div>
                  </div>
                </div>
                <button className="btn-generate" onClick={handleGenerate} disabled={loading} aria-label="Download PDF">
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
                <p style={{ marginBottom: '1rem' }}>Check your downloads folder for your small claims complaint form.</p>
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
                <button onClick={() => { setDone(false); setStep(0); setForm({ plaintiffName: '', plaintiffAddress: '', plaintiffCity: '', plaintiffState: state.abbr, plaintiffZip: '', plaintiffPhone: '', plaintiffEmail: '', defendantName: '', defendantAddress: '', defendantCity: '', defendantState: state.abbr, defendantZip: '', defendantPhone: '', claimType: '', incidentDate: '', amountClaimed: '', claimStatement: '' }) }} style={{ background: 'none', border: '1px solid var(--green)', color: 'var(--green)', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem' }}>
                  Start a new form
                </button>
              </div>
            )}
          </div>
        )}

        {/* Navigation buttons */}
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

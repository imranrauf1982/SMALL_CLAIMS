import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AdLeaderboard, AdRectangle } from './components/AdUnit'
import { STATE_LIST } from './lib/states'

export const metadata = {
  title: 'Free Small Claims Court Forms — All 50 States | SmallClaimsHelper.com',
  description: 'Build your small claims court complaint in minutes. Free fillable PDF for all 50 US states. No lawyer needed. Covers unpaid debt, property damage, bad checks, contractors, and more.',
  alternates: { canonical: 'https://smallclaimshelper.com' },
}

const FAQS = [
  { q: 'Do I need a lawyer to file a small claims court case?', a: 'No — that\'s the whole point of small claims court. It\'s specifically designed for people to represent themselves without an attorney. In many states, attorneys are actually not allowed to appear in small claims court at all.' },
  { q: 'How much does it cost to file a small claims case?', a: 'Filing fees vary by state and the amount you\'re claiming, but typically range from $15 to $200. Most states charge between $30 and $100. You can usually recover your filing fee from the defendant if you win.' },
  { q: 'How long does the small claims process take?', a: 'After filing, your hearing is typically scheduled within 30 to 70 days, depending on your state and local court\'s calendar. If you win and the defendant doesn\'t pay, collecting the judgment can take additional time.' },
  { q: 'What kinds of cases can I file in small claims court?', a: 'Common cases include unpaid loans, security deposits not returned, contractor disputes, property damage, bounced checks, defective products, auto accident damage, and unpaid wages. Each state has a dollar limit — from $2,500 to $25,000.' },
  { q: 'What if the defendant doesn\'t show up to the hearing?', a: 'If the defendant fails to appear, the judge will usually issue a default judgment in your favor. You still need to prove your damages with evidence, even without the defendant present.' },
  { q: 'Can I sue a business in small claims court?', a: 'Yes. You can sue both individuals and businesses (LLCs, corporations, sole proprietors) in small claims court. You\'ll need to correctly identify the legal name of the business and serve the registered agent.' },
]

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            Free · No sign-up required · All 50 US states
          </div>
          <h1>Sue with confidence.<br /><em>No lawyer. No confusion.</em></h1>
          <p className="hero-sub">
            The easiest way to build a small claims court complaint. Pick your state,
            fill out the form, download your ready-to-file PDF — in under 10 minutes.
          </p>
          <div className="hero-actions">
            <Link href="#states" className="btn-primary">Pick my state →</Link>
            <Link href="/how-it-works" className="btn-secondary">How it works</Link>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">50</div>
              <div className="hero-stat-label">US states covered</div>
            </div>
            <div>
              <div className="hero-stat-num">$0</div>
              <div className="hero-stat-label">Cost to use this tool</div>
            </div>
            <div>
              <div className="hero-stat-num">10 min</div>
              <div className="hero-stat-label">To complete your form</div>
            </div>
            <div>
              <div className="hero-stat-num">4M+</div>
              <div className="hero-stat-label">Americans file each year</div>
            </div>
          </div>
        </div>
      </section>

      {/* AD — Leaderboard below hero */}
      <div className="container">
        <AdLeaderboard />
      </div>

      {/* HOW IT WORKS */}
      <section style={{ padding: '3.5rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label">Simple process</div>
            <h2 className="section-title">3 steps to your day in court</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { n: '1', icon: '🗺️', title: 'Pick your state', desc: 'Choose from all 50 US states. We\'ll show you the filing limit, fees, and which court to go to.' },
              { n: '2', icon: '📝', title: 'Fill out the form', desc: 'Enter your details, the defendant\'s info, claim amount, and a short description of what happened.' },
              { n: '3', icon: '📄', title: 'Download & file', desc: 'Get your ready-to-file PDF instantly. Print it, bring it to the courthouse, and pay the filing fee.' },
            ].map(step => (
              <div key={step.n} style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--gray-50)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>{step.icon}</div>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--navy)', color: 'white', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem' }}>{step.n}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', lineHeight: '1.65' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATE GRID */}
      <section className="state-grid-section" id="states">
        <div className="container">
          <div className="section-label">All 50 states</div>
          <h2 className="section-title">Choose your state to get started</h2>
          <p className="section-sub">Each state has different filing limits, fees, and courts. We handle the details for you.</p>
          <div className="state-grid">
            {STATE_LIST.map(state => (
              <Link key={state.slug} href={`/${state.slug}`} className="state-card">
                <div className="state-card-abbr">{state.abbr}</div>
                <div className="state-card-name">{state.name}</div>
                <span className="state-card-limit">Up to ${state.limit.toLocaleString()}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AD — Rectangle mid-page */}
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <AdRectangle />
      </div>

      {/* CLAIM TYPES */}
      <section style={{ padding: '3.5rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label">Common cases</div>
            <h2 className="section-title">What can you sue for?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '💸', title: 'Unpaid debt or loan', desc: 'Someone owes you money and won\'t pay back.' },
              { icon: '🏠', title: 'Security deposit', desc: 'Landlord kept your deposit without reason.' },
              { icon: '🔨', title: 'Bad contractor', desc: 'Contractor did poor work or took your money.' },
              { icon: '🚗', title: 'Auto accident', desc: 'Minor accident damage not covered by insurance.' },
              { icon: '📦', title: 'Defective product', desc: 'Product that didn\'t work and seller won\'t refund.' },
              { icon: '💳', title: 'Bad check', desc: 'Someone paid you with a bounced check.' },
              { icon: '💼', title: 'Unpaid wages', desc: 'Employer owes you back pay or tips.' },
              { icon: '🏗️', title: 'Property damage', desc: 'Someone damaged your property and won\'t pay.' },
            ].map(ct => (
              <div key={ct.title} style={{ padding: '1.25rem', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-md)', background: 'var(--gray-50)' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{ct.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>{ct.title}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--gray-600)', lineHeight: 1.5 }}>{ct.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Frequently asked questions</h2>
          </div>
          {FAQS.map((faq, i) => (
            <div className="faq-item" key={i}>
              <details>
                <summary className="faq-q" style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '1.25rem 0', fontSize: '1rem', fontWeight: 600, color: 'var(--gray-800)', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
                  {faq.q}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, color: 'var(--gray-400)' }}><polyline points="6 9 12 15 18 9"/></svg>
                </summary>
                <p className="faq-a open">{faq.a}</p>
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ background: 'var(--navy)', padding: '3.5rem 0', textAlign: 'center', color: 'white' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to file your claim?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Pick your state below and have your document ready in under 10 minutes.
          </p>
          <Link href="#states" className="btn-primary">Choose my state →</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

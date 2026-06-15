import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AdLeaderboard } from '../components/AdUnit'
import Link from 'next/link'

export const metadata = {
  title: 'How It Works — Free Small Claims Court Forms | SmallClaimsHelper',
  description: 'Learn how to file a small claims court case in 3 simple steps. No lawyer needed. Our free tool builds your complaint PDF for any US state in under 10 minutes.',
  alternates: { canonical: 'https://smallclaimshelper.com/how-it-works' },
}

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        <AdLeaderboard />
        <div className="container-narrow">
          <div className="section-label">Simple 3-step process</div>
          <h1 style={{ marginBottom: '1rem' }}>How SmallClaimsHelper works</h1>
          <p style={{ color: 'var(--gray-600)', fontSize: '1.05rem', marginBottom: '3rem', lineHeight: 1.7 }}>
            Small claims court exists specifically so everyday Americans can sue without a lawyer. Our tool makes the paperwork part fast and easy.
          </p>

          {[
            {
              step: 1, icon: '🗺️', title: 'Pick your state',
              body: `Every US state has its own small claims rules — different dollar limits, different courts, different filing fees. We have all 50 covered. Just click your state and we\'ll show you exactly what applies to you, including the maximum you can sue for and which courthouse to go to.`,
            },
            {
              step: 2, icon: '📝', title: 'Fill out the form',
              body: 'Our guided form walks you through everything a small claims complaint needs: your information, the defendant\'s information, the type of claim, the amount, and a plain-English description of what happened. We prompt you with tips and examples so you know what to write.',
            },
            {
              step: 3, icon: '📄', title: 'Download your PDF',
              body: 'When you\'re done, click "Download PDF" and you\'ll instantly get a completed complaint form, ready to print and bring to the courthouse. The PDF includes the filing instructions for your specific state, an evidence checklist, and a next-steps guide.',
            },
            {
              step: 4, icon: '🏛️', title: 'File at the courthouse',
              body: 'Take your printed form to your local courthouse clerk\'s office. Pay the filing fee (usually $30–$100). The clerk will give you a hearing date. You may need to "serve" the defendant — the clerk will explain how.',
            },
            {
              step: 5, icon: '⚖️', title: 'Win your case',
              body: 'Show up to your hearing on time with copies of all your evidence (contracts, texts, receipts, photos). Judges in small claims court are used to non-lawyers. Speak clearly, stick to the facts, and let your evidence do the work.',
            },
          ].map(({ step, icon, title, body }) => (
            <div key={step} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', alignItems: 'flex-start' }}>
              <div style={{ minWidth: '48px', height: '48px', background: 'var(--navy)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>{step}</div>
              <div>
                <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{icon} {title}</h2>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.75 }}>{body}</p>
              </div>
            </div>
          ))}

          <div style={{ background: 'var(--blue-light)', border: '1px solid rgba(24,95,165,0.2)', borderRadius: 'var(--radius-md)', padding: '1.75rem', textAlign: 'center', marginTop: '3rem' }}>
            <h2 style={{ marginBottom: '0.75rem', fontSize: '1.4rem' }}>Ready to start?</h2>
            <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>Pick your state and have your form ready in under 10 minutes.</p>
            <Link href="/#states" className="btn-primary">Choose my state →</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

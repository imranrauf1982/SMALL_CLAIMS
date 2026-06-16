import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { AdLeaderboard, AdInArticle } from '../../components/AdUnit'
import Link from 'next/link'

export const metadata = {
  title: 'How to Win in Small Claims Court — 10 Proven Tips | SmallClaimsHelper',
  description: 'How to win your small claims court case. 10 proven strategies used by successful plaintiffs. Evidence, preparation, and what to say in court.',
  alternates: { canonical: 'https://smallclaimshelper.com/blog/how-to-win-small-claims' },
}

const TIPS = [
  {
    n: 1, title: 'Have solid evidence — not just your word',
    body: 'The single biggest predictor of winning is documentation. Contracts, texts, emails, receipts, and photos all outweigh verbal claims. If you have nothing in writing, get written estimates from contractors or repair shops that show the damage or defective work. A judge cannot rule in your favor based on "he said / she said" alone.',
    icon: '📄'
  },
  {
    n: 2, title: 'Send a demand letter BEFORE filing',
    body: 'Always send the defendant a written demand letter (email or certified mail) before filing. State clearly: what you are owed, why, and a deadline to pay. This shows the judge you tried to resolve it first. Many defendants pay after a demand letter — saving you time and filing fees.',
    icon: '✉️'
  },
  {
    n: 3, title: 'Know your exact dollar amount and how you calculated it',
    body: 'When the judge asks "how much are you claiming and why?" you need a clear answer. Break it down: "$1,200 for the deposit, $350 for the replacement lock, $80 filing fee = $1,630 total." Vague amounts like "around $2,000" hurt your credibility.',
    icon: '🔢'
  },
  {
    n: 4, title: 'Organize your evidence before the hearing',
    body: 'Put everything in a folder or binder in order. Number your documents. Make 3 copies — one for you, one for the judge, one for the defendant. When the judge asks for your contract, hand it over in 3 seconds, not 3 minutes of shuffling. Organization signals credibility.',
    icon: '📁'
  },
  {
    n: 5, title: 'Stick to facts — not emotions',
    body: 'Judges hear dozens of cases a day. They respect plaintiffs who state facts clearly and quickly. "On March 3rd, I paid $1,200. The work was not completed. I have the bank record here." Not: "I am so upset because this contractor ruined my whole year and I trusted him..." Keep it factual, calm, and brief.',
    icon: '⚖️'
  },
  {
    n: 6, title: 'Bring the right witnesses',
    body: 'A witness who personally saw the event, the damage, or heard the defendant\'s promises can be powerful. Prepare them: what will they say, how long will they speak, and what documents will support their testimony. A single focused witness beats five rambling ones.',
    icon: '👥'
  },
  {
    n: 7, title: 'Know the law that applies to your case',
    body: 'You don\'t need to cite case law, but knowing the basics helps. For security deposit cases: look up your state\'s landlord-tenant law on the return deadline. For contractors: research your state\'s contractor licensing requirements. Mentioning a specific law shows the judge you did your homework.',
    icon: '📚'
  },
  {
    n: 8, title: 'Arrive early and observe other cases',
    body: 'Show up 30 minutes before your scheduled time. Watch how the judge runs the courtroom. Notice what the winning plaintiffs do differently from the losing ones. You will learn more in 30 minutes of observation than in hours of reading.',
    icon: '⏰'
  },
  {
    n: 9, title: 'Prepare for the defendant\'s arguments',
    body: 'Think about what the defendant will say and prepare a response. If they claim the work was done, bring photos proving it wasn\'t. If they claim you never complained, bring your text messages. Anticipating their defense makes you look prepared and confident.',
    icon: '🛡️'
  },
  {
    n: 10, title: 'Follow up if you win — judgments don\'t collect themselves',
    body: 'Winning a judgment is step one. If the defendant doesn\'t pay voluntarily, you may need to garnish wages, levy bank accounts, or place a lien on their property. Most states give you 5-10 years to collect a judgment. Keep your paperwork and follow up.',
    icon: '💰'
  },
]

export default function HowToWinPage() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
        <AdLeaderboard />
        <div className="container-narrow">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>How to win small claims court</span>
          </nav>

          <div className="section-label">Strategy guide</div>
          <h1 style={{ marginBottom: '1rem' }}>How to Win in Small Claims Court</h1>
          <p style={{ color: 'var(--gray-600)', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Small claims court favors the prepared plaintiff. These 10 strategies are used by people who consistently win their cases — no lawyer needed.
          </p>

          {TIPS.map((tip, i) => (
            <div key={tip.n}>
              {i === 5 && <AdInArticle />}
              <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '2rem', padding: '1.5rem', background: 'white', border: '1px solid var(--gray-200)', borderRadius: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--navy)', color: 'white', fontWeight: 700, fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{tip.n}</div>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>{tip.icon}</span>
                    <h2 style={{ fontSize: '1.05rem', margin: 0 }}>{tip.title}</h2>
                  </div>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem', lineHeight: 1.75, margin: 0 }}>{tip.body}</p>
                </div>
              </div>
            </div>
          ))}

          <div style={{ background: 'var(--green-light)', border: '1px solid rgba(15,110,86,0.25)', borderRadius: '12px', padding: '1.75rem', margin: '2rem 0', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--green)' }}>The #1 tip: start with a great complaint form</h2>
            <p style={{ color: '#0a5040', fontSize: '0.9375rem', marginBottom: '1.25rem', lineHeight: 1.65 }}>
              A clear, complete complaint sets the tone for your whole case. Use our free builder to create a ready-to-file PDF in minutes.
            </p>
            <Link href="/#states" className="btn-primary" style={{ background: 'var(--green)' }}>Build my complaint form →</Link>
          </div>

          <h2 style={{ marginBottom: '1rem' }}>Also read</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Link href="/blog/what-to-bring-court" style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)', borderRadius: '10px', padding: '1.25rem', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📋</div>
              <div style={{ fontWeight: 600, color: 'var(--gray-800)', marginBottom: '0.25rem', fontSize: '0.9rem' }}>What to bring to court</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>Complete evidence checklist</div>
            </Link>
            <Link href="/faq" style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)', borderRadius: '10px', padding: '1.25rem', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>❓</div>
              <div style={{ fontWeight: 600, color: 'var(--gray-800)', marginBottom: '0.25rem', fontSize: '0.9rem' }}>FAQ</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>Common questions answered</div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { AdLeaderboard, AdInArticle } from '../../components/AdUnit'
import Link from 'next/link'

export const metadata = {
  title: 'What to Bring to Small Claims Court — Complete Checklist | SmallClaimsHelper',
  description: 'Complete checklist of what to bring to small claims court. Evidence, documents, witnesses — everything you need to win your case.',
  alternates: { canonical: 'https://smallclaimshelper.com/blog/what-to-bring-court' },
}

export default function WhatToBringPage() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
        <AdLeaderboard />
        <div className="container-narrow">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>What to bring to court</span>
          </nav>

          <div className="section-label">Preparation guide</div>
          <h1 style={{ marginBottom: '1rem' }}>What to Bring to Small Claims Court</h1>
          <p style={{ color: 'var(--gray-600)', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Being prepared is the single biggest factor in winning your small claims case. Here is a complete checklist of everything to bring on your hearing day.
          </p>

          {/* DOCUMENTS */}
          <div style={{ background: 'var(--blue-light)', border: '1px solid rgba(24,95,165,0.2)', borderRadius: 'var(--border-radius-lg, 16px)', padding: '1.75rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', color: 'var(--navy)' }}>📄 Essential documents</h2>
            {[
              { title: 'Your filed complaint (3 copies)', desc: 'Bring the form you filed with the court. Bring at least 3 copies — one for you, one for the judge, one for the defendant.' },
              { title: 'Written contracts or agreements', desc: 'Any signed contract, lease, service agreement, or written promise related to your dispute. This is your strongest evidence.' },
              { title: 'Invoices and receipts', desc: 'All receipts, invoices, estimates, or bills that support the amount you are claiming.' },
              { title: 'Bank statements or cancelled checks', desc: 'Proof that you paid money to the defendant, or that the defendant owes you money.' },
              { title: 'Photos or videos', desc: 'Visual evidence of damage, defective work, or the condition of property. Print photos in color. Bring your phone as backup.' },
              { title: 'Text messages and emails', desc: 'Print all relevant text and email conversations. Highlight the key parts. Judges appreciate organized printed evidence.' },
              { title: 'Demand letter and proof of sending', desc: 'A copy of any letter or email you sent asking the defendant to pay before you filed. This shows you tried to resolve it.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: i < 6 ? '1px solid rgba(24,95,165,0.15)' : 'none' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--blue)', color: 'white', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>✓</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)', lineHeight: 1.55 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* WITNESSES */}
          <div style={{ background: 'var(--green-light)', border: '1px solid rgba(15,110,86,0.2)', borderRadius: 'var(--border-radius-lg, 16px)', padding: '1.75rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', color: 'var(--green)' }}>👥 Witnesses</h2>
            {[
              { title: 'Live witnesses (if applicable)', desc: 'A person who directly saw or heard what happened can testify in court. Tell them the hearing date well in advance and make sure they can attend.' },
              { title: 'Written witness statements', desc: 'If a witness cannot attend, bring a signed written statement from them describing what they know. Some judges will accept this, others will not — check with your court clerk.' },
              { title: 'Expert opinions (if needed)', desc: 'For contractor disputes or property damage, a written estimate or opinion from a licensed contractor or repair shop can serve as expert evidence.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: i < 2 ? '1rem' : 0, paddingBottom: i < 2 ? '1rem' : 0, borderBottom: i < 2 ? '1px solid rgba(15,110,86,0.15)' : 'none' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--green)', color: 'white', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>✓</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)', lineHeight: 1.55 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <AdInArticle />

          {/* DAY OF TIPS */}
          <div style={{ background: 'var(--gold-light)', border: '1px solid rgba(201,124,0,0.2)', borderRadius: 'var(--border-radius-lg, 16px)', padding: '1.75rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', color: 'var(--gold)' }}>⏰ Day-of essentials</h2>
            {[
              { title: 'Government-issued photo ID', desc: 'Driver\'s license or passport. The court will verify your identity.' },
              { title: 'Arrive 30 minutes early', desc: 'Courts move fast. Being late can result in your case being dismissed. Go through security and find your courtroom with time to spare.' },
              { title: 'Dress professionally', desc: 'You don\'t need a suit, but dress respectably. First impressions matter even in small claims court.' },
              { title: 'Organized evidence binder', desc: 'Put all your documents in a binder or folder in logical order. Number the pages. Judges notice when a plaintiff is organized — it helps your credibility.' },
              { title: 'A written summary of your case', desc: 'Write a one-page summary of what happened, when, and what you lost. Read it before you speak. Nerves can make you forget key points.' },
              { title: 'Pen and notepad', desc: 'Take notes during the hearing, especially if the defendant makes claims you want to rebut.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: i < 5 ? '1rem' : 0, paddingBottom: i < 5 ? '1rem' : 0, borderBottom: i < 5 ? '1px solid rgba(201,124,0,0.15)' : 'none' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--gold)', color: 'white', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>✓</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)', lineHeight: 1.55 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* WHAT NOT TO BRING */}
          <div style={{ background: '#fef2f2', border: '1px solid rgba(163,45,45,0.2)', borderRadius: 'var(--border-radius-lg, 16px)', padding: '1.75rem', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', color: 'var(--red)' }}>🚫 What NOT to bring or do</h2>
            {[
              'Do not bring irrelevant documents — judges get impatient with unorganized piles of paper',
              'Do not interrupt the defendant or the judge — wait your turn to speak',
              'Do not bring children unless absolutely unavoidable — it is distracting',
              'Do not bring an attorney if your state prohibits it in small claims court',
              'Do not make it emotional — stick to facts and dollar amounts, not personal feelings',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: i < 4 ? '0.75rem' : 0 }}>
                <div style={{ color: 'var(--red)', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>✗</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--gray-700)', lineHeight: 1.55 }}>{item}</div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--navy)', color: 'white', borderRadius: 'var(--border-radius-lg, 16px)', padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ color: 'white', marginBottom: '0.75rem', fontSize: '1.35rem' }}>Ready to build your claim form?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem' }}>Free PDF generator for all 50 US states. Takes under 10 minutes.</p>
            <Link href="/#states" className="btn-primary">Choose my state →</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

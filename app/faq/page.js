import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AdLeaderboard, AdInArticle } from '../components/AdUnit'
import Link from 'next/link'

export const metadata = {
  title: 'Small Claims Court FAQ — All Your Questions Answered | SmallClaimsHelper',
  description: 'Everything you need to know about filing in small claims court in the USA. Filing fees, limits, serving defendants, collecting judgments, and more.',
  alternates: { canonical: 'https://smallclaimshelper.com/faq' },
}

const FAQS = [
  { q: 'Do I need a lawyer for small claims court?', a: 'No. Small claims court is specifically designed for people to represent themselves. In many states, lawyers are actually prohibited from appearing in small claims court. That is what makes it accessible and affordable.' },
  { q: 'What is the maximum I can sue for?', a: 'It depends on your state. Limits range from $2,500 (Rhode Island) to $25,000 (Tennessee). Most states fall between $5,000 and $15,000. Check your state\'s page on SmallClaimsHelper for the exact limit.' },
  { q: 'How much does it cost to file?', a: 'Filing fees vary by state and claim amount, typically ranging from $15 to $200. Most states charge $30–$100. If you win, you can usually add the filing fee to your judgment and recover it from the defendant.' },
  { q: 'How long does the process take?', a: 'After you file, your hearing is typically scheduled within 30 to 70 days. If the defendant appeals or doesn\'t pay after you win, the process can take longer. Collecting a judgment against an uncooperative defendant can take months.' },
  { q: 'How do I serve the defendant?', a: 'Service rules vary by state. Common methods include certified mail (most states allow this), sheriff or process server, or personal service. In many states, the court clerk handles service for you after you file. Your clerk will explain the local rules.' },
  { q: 'What happens if I win but the defendant doesn\'t pay?', a: 'Winning a judgment doesn\'t guarantee payment. You may need to take additional steps like wage garnishment, bank account levy, or placing a lien on the defendant\'s property. The court will not collect the money for you, but most states give you tools to enforce your judgment.' },
  { q: 'Can I sue a business?', a: 'Yes. You can sue sole proprietors, partnerships, LLCs, and corporations. Use the exact registered legal name of the business — check your contract, receipt, or your state\'s Secretary of State business registry.' },
  { q: 'Can I be countersued?', a: 'Yes. The defendant can file a counterclaim against you in the same case. If you owe them money for a related reason, they can bring that up at the same hearing. Be prepared.' },
  { q: 'What evidence should I bring?', a: 'Bring any written contracts or agreements, text messages and emails, receipts and invoices, photos, bank records, witness names and contact info, and any police or incident reports. Bring at least 3 copies of everything — one for you, one for the judge, one for the defendant.' },
  { q: 'Can small claims decisions be appealed?', a: 'Yes, in most states. Either party can typically appeal a small claims decision to a higher court within 30 days of the judgment. An appeal usually means a new trial in a higher court, and at that level the defendant can hire a lawyer.' },
  { q: 'Can I bring a witness?', a: 'Yes, and it can help. A witness who has first-hand knowledge of the dispute can be very persuasive in small claims court. Let the court know in advance if possible, and make sure your witness can attend on the hearing date.' },
  { q: 'What if the defendant lives in another state?', a: 'You generally must file in the state where the defendant lives, where the contract was made, or where the incident occurred. Suing across state lines in small claims court is complicated — the defendant may challenge jurisdiction.' },
]

export default function FAQPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        <AdLeaderboard />
        <div className="container-narrow">
          <div className="section-label">FAQ</div>
          <h1 style={{ marginBottom: '0.75rem' }}>Small claims court — all your questions answered</h1>
          <p style={{ color: 'var(--gray-600)', marginBottom: '3rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Everything you need to know about filing a small claims case in the United States.
          </p>

          {FAQS.map((faq, i) => (
            <div key={i}>
              {i === 6 && <AdInArticle />}
              <div className="faq-item">
                <details>
                  <summary style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 0', fontSize: '1rem', fontWeight: 600, color: 'var(--gray-800)', cursor: 'pointer', fontFamily: 'var(--font-sans)', background: 'none', border: 'none', width: '100%', textAlign: 'left' }}>
                    {faq.q}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, color: 'var(--gray-400)' }}><polyline points="6 9 12 15 18 9"/></svg>
                  </summary>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--gray-600)', lineHeight: 1.75, paddingBottom: '1.25rem' }}>{faq.a}</p>
                </details>
              </div>
            </div>
          ))}

          <div style={{ background: 'var(--navy)', color: 'white', borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'center', marginTop: '3rem' }}>
            <h2 style={{ color: 'white', marginBottom: '0.75rem', fontSize: '1.35rem' }}>Ready to build your form?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', fontSize: '0.9375rem' }}>Free PDF generator for all 50 US states. Takes under 10 minutes.</p>
            <Link href="/#states" className="btn-primary">Get started →</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

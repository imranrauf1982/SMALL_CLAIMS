import { notFound } from 'next/navigation'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AdLeaderboard, AdRectangle, AdInArticle } from '../components/AdUnit'
import { getState, STATE_LIST } from '../lib/states'
import ClaimForm from '../components/ClaimForm'
import ShareButtons from '../components/ShareButtons'

export async function generateStaticParams() {
  return STATE_LIST.map(s => ({ state: s.slug }))
}

export async function generateMetadata({ params }) {
  const state = getState(params.state)
  if (!state) return {}
  return {
    title: `${state.name} Small Claims Court Form — Free PDF | SmallClaimsHelper`,
    description: `Free small claims court form for ${state.name}. Filing limit up to $${state.limit.toLocaleString()}. ${state.court}. Filing fee ${state.filingFee}. Build your PDF in minutes — no lawyer needed.`,
    keywords: state.keywords,
    alternates: { canonical: `https://smallclaimshelper.com/${state.slug}` },
    openGraph: {
      title: `${state.name} Small Claims Court — Free Form & PDF`,
      description: `Sue in ${state.name} small claims court. Limit $${state.limit.toLocaleString()}. Fill out your form and download a ready-to-file PDF.`,
      url: `https://smallclaimshelper.com/${state.slug}`,
    },
  }
}

export default function StatePage({ params }) {
  const state = getState(params.state)
  if (!state) notFound()

  const shareUrl = `https://smallclaimshelper.com/${state.slug}`
  const shareTitle = `Free ${state.name} Small Claims Court Form — No Lawyer Needed`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${state.name} Small Claims Court Form`,
    description: `Free small claims court document builder for ${state.name}. Filing limit $${state.limit.toLocaleString()}.`,
    url: shareUrl,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://smallclaimshelper.com' },
        { '@type': 'ListItem', position: 2, name: `${state.name} Small Claims`, item: shareUrl },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div className="container" style={{ paddingTop: '2rem' }}>
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span className="breadcrumb-sep" aria-hidden="true">›</span>
          <a href="/#states">All states</a>
          <span className="breadcrumb-sep" aria-hidden="true">›</span>
          <span aria-current="page">{state.name}</span>
        </nav>

        {/* AD — Leaderboard top */}
        <AdLeaderboard />

        {/* State header */}
        <div style={{ marginBottom: '2rem' }}>
          <div className="section-label">{state.abbr} · {state.court}</div>
          <h1 style={{ marginBottom: '0.75rem' }}>
            {state.name} Small Claims Court Form
          </h1>
          <p style={{ color: 'var(--gray-600)', fontSize: '1.05rem', maxWidth: '620px', lineHeight: 1.7 }}>
            Free fillable complaint form for {state.name} small claims court. Download a ready-to-file PDF in minutes — no lawyer needed.
          </p>
        </div>

        {/* State info boxes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { label: 'Max you can sue for', value: `$${state.limit.toLocaleString()}`, color: 'var(--green)', bg: 'var(--green-light)' },
            { label: 'Filing fee (approx)', value: state.filingFee, color: 'var(--gold)', bg: 'var(--gold-light)' },
            { label: 'Court to file in', value: state.court, color: 'var(--blue)', bg: 'var(--blue-light)' },
          ].map(item => (
            <div key={item.label} style={{ background: item.bg, border: `1px solid ${item.color}33`, borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--gray-600)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.375rem' }}>{item.label}</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: item.color }}>{item.value}</div>
            </div>
          ))}
        </div>

        {/* Filing instructions box */}
        <div className="info-box" style={{ marginBottom: '2rem' }}>
          <h4>📋 How to file in {state.name}</h4>
          <p>{state.filingInstructions}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem', alignItems: 'start' }}>
          <div>
            {/* THE FORM */}
            <ClaimForm state={state} />

            {/* Share */}
            <ShareButtons
              url={shareUrl}
              title={shareTitle}
              description={`Free ${state.name} small claims court form — build your complaint PDF in under 10 minutes. No lawyer needed.`}
            />
          </div>

          {/* Sidebar */}
          <aside>
            <AdRectangle />

            {/* Counties quick links */}
            {state.counties && (
              <div style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginTop: '1rem', border: '1px solid var(--gray-200)' }}>
                <h3 style={{ fontSize: '0.9rem', marginBottom: '0.875rem', color: 'var(--navy)' }}>
                  Top counties in {state.name}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  {state.counties.map(county => (
                    <li key={county} style={{ fontSize: '0.875rem' }}>
                      <a href={`/${state.slug}/${county.toLowerCase().replace(/\s+/g, '-')}`} style={{ color: 'var(--blue)' }}>
                        {county} County small claims
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Nearby states */}
            <div style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginTop: '1rem', border: '1px solid var(--gray-200)' }}>
              <h3 style={{ fontSize: '0.9rem', marginBottom: '0.875rem', color: 'var(--navy)' }}>Other states</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                {STATE_LIST.filter(s => s.slug !== state.slug).slice(0, 8).map(s => (
                  <li key={s.slug} style={{ fontSize: '0.875rem' }}>
                    <a href={`/${s.slug}`} style={{ color: 'var(--blue)' }}>{s.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Ad in article before FAQ */}
        <AdInArticle />

        {/* State-specific FAQ */}
        <section style={{ marginTop: '2rem', paddingBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>{state.name} Small Claims Court — FAQs</h2>
          {[
            {
              q: `What is the small claims limit in ${state.name}?`,
              a: `In ${state.name}, you can sue for up to $${state.limit.toLocaleString()} in small claims court (${state.court}). For claims above this amount, you would need to file in a higher court.`,
            },
            {
              q: `How much does it cost to file a small claims case in ${state.name}?`,
              a: `Filing fees in ${state.name} are approximately ${state.filingFee}, depending on the amount of your claim and the specific courthouse. You can typically recover this fee from the defendant if you win.`,
            },
            {
              q: `Which court handles small claims cases in ${state.name}?`,
              a: `Small claims cases in ${state.name} are handled by the ${state.court}. ${state.filingInstructions}`,
            },
            {
              q: `Can I sue a business in ${state.name} small claims court?`,
              a: `Yes. You can sue both individuals and businesses in ${state.name} small claims court, as long as your claim does not exceed $${state.limit.toLocaleString()}. Make sure you have the correct legal name of the business.`,
            },
          ].map((faq, i) => (
            <div className="faq-item" key={i}>
              <details>
                <summary style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.125rem 0', fontSize: '1rem', fontWeight: 600, color: 'var(--gray-800)', cursor: 'pointer', fontFamily: 'var(--font-sans)', background: 'none', border: 'none', width: '100%', textAlign: 'left' }}>
                  {faq.q}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, color: 'var(--gray-400)' }}><polyline points="6 9 12 15 18 9"/></svg>
                </summary>
                <p style={{ fontSize: '0.9375rem', color: 'var(--gray-600)', lineHeight: 1.75, paddingBottom: '1.25rem' }}>{faq.a}</p>
              </details>
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </>
  )
}

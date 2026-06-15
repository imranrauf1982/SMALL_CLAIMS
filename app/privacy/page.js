import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Privacy Policy | SmallClaimsHelper',
  description: 'Privacy policy for SmallClaimsHelper.com',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="container-narrow" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
          <strong>Effective date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        {[
          { h: 'What we collect', p: 'SmallClaimsHelper does not require account creation. When you use our form builder, all form data is processed in your browser. We do not store your personal information, plaintiff details, or defendant details on our servers. We may store anonymized data such as the state selected and claim type for analytics purposes only.' },
          { h: 'Cookies', p: 'We use cookies for analytics (to understand how many people visit our site) and for advertising (Google AdSense). You can opt out of personalized advertising through Google\'s Ad Settings. We do not use cookies to track personal information.' },
          { h: 'Google AdSense', p: 'This site uses Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to this and other websites. You can opt out of personalized advertising at https://www.google.com/settings/ads.' },
          { h: 'Third-party services', p: 'We use Supabase for anonymous usage analytics (no personal data). We use Vercel for hosting. These services have their own privacy policies.' },
          { h: 'Children', p: 'This site is not directed at children under 13. We do not knowingly collect personal information from children under 13.' },
          { h: 'Contact', p: 'For privacy questions, email: privacy@smallclaimshelper.com' },
        ].map(s => (
          <div key={s.h} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{s.h}</h2>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.8 }}>{s.p}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

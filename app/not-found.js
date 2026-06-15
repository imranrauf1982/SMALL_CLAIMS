import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚖️</div>
        <h1 style={{ marginBottom: '1rem' }}>Page not found</h1>
        <p style={{ color: 'var(--gray-600)', marginBottom: '2rem' }}>This page doesn&apos;t exist. Let&apos;s get you back to filing your claim.</p>
        <Link href="/" className="btn-primary">Go to homepage →</Link>
      </div>
      <Footer />
    </>
  )
}

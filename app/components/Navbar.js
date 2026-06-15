import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container navbar-inner">
        <Link href="/" className="navbar-brand" aria-label="SmallClaimsHelper home">
          <div className="navbar-logo" aria-hidden="true">
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </div>
          <span className="navbar-name">SmallClaims<span>Helper</span></span>
        </Link>
        <div className="navbar-links">
          <Link href="/#states">All 50 States</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/#states" className="navbar-cta">Start My Form →</Link>
        </div>
      </div>
    </nav>
  )
}

import Link from 'next/link'
import { STATE_LIST } from '../lib/states'

export default function Footer() {
  const topStates = STATE_LIST.slice(0, 10)

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">SmallClaimsHelper.com</div>
            <p className="footer-desc">
              Free small claims court document builder for all 50 US states.
              Fill out your form online, download a ready-to-file PDF, and get
              your day in court — no lawyer needed.
            </p>
            <p className="footer-disclaimer">
              SmallClaimsHelper is not a law firm and does not provide legal advice.
              Documents generated are templates only. Always verify requirements
              with your local court clerk before filing.
            </p>
          </div>
          <div>
            <div className="footer-heading">Top states</div>
            <ul className="footer-links">
              {topStates.map(s => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`}>{s.name} Small Claims</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-heading">Resources</div>
            <ul className="footer-links">
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/#states">All 50 states</Link></li>
              <li><Link href="/blog/how-to-win-small-claims">How to win</Link></li>
              <li><Link href="/blog/what-to-bring-court">What to bring</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-heading">Legal</div>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy policy</Link></li>
              <li><Link href="/terms">Terms of use</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SmallClaimsHelper.com — Free small claims court forms for all 50 US states</span>
          <span>Made with ♥ for self-representing Americans</span>
        </div>
      </div>
    </footer>
  )
}

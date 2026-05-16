import { Link } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import AccessibilityPanel from '../components/AccessibilityPanel'
import PdfList from '../components/PdfList'

export default function SubPage({ subject, title, folder, count, skip }) {
  return (
    <>
      <a className="skip-link" href="#main-content">דלג לתוכן</a>
      <TopBar />
      <div className="page">
        <header className="page-header">
          <Link to="/" className="back-link">
            <i className="ti ti-arrow-right" aria-hidden="true" />
            חזרה לדף הבית
          </Link>
          <div className="page-subject">{subject}</div>
          <h1 className="page-title">{title}</h1>
          <a
            href="tel:+972544248782"
            className="page-contact"
            aria-label="התקשרי לעמית"
          >
            <i className="ti ti-phone" aria-hidden="true" />
            054-4248782
          </a>
        </header>
        <main id="main-content" className="content-area">
          <PdfList folder={folder} count={count} skip={skip} />
        </main>
        <Footer />
      </div>
      <AccessibilityPanel />
    </>
  )
}

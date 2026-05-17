import { useState } from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import AccessibilityPanel from '../components/AccessibilityPanel'

const SUBJECTS = [
  {
    name: 'היסטוריה',
    icon: 'ti-world',
    links: [
      { label: 'סיכום הנושאים — בנקודות',       path: '/summary-history' },
      { label: 'הדרכה למענה על שאלות',            path: '/guidance-history' },
      { label: 'שאלות לתרגול לפי נושאים',         path: '/sheelot-history' },
    ],
  },
  {
    name: 'אזרחות',
    icon: 'ti-building-community',
    links: [
      { label: 'סיכום החומר לבגרות',              path: '/summary-ezrahut' },
      { label: 'הדרכה למענה על שאלות',            path: '/guidance-ezrahut' },
      { label: 'שאלות לתרגול לפי נושאים',         path: '/sheelot-ezrahut' },
    ],
  },
  {
    name: 'תנ״ך',
    icon: 'ti-book',
    links: [
      { label: 'סיכום החומר — בנקודות',           path: '/summary-tanach' },
      { label: 'הדרכה למענה על שאלות',            path: '/guidance-tanach' },
      { label: 'שאלות לתרגול לפי נושאים',         path: '/sheelot-tanach' },
    ],
  },
  {
    name: 'ספרות',
    icon: 'ti-feather',
    links: [
      { label: 'הדרכה למענה על שאלות',            path: '/guidance-sifrut' },
      { label: 'שאלות לתרגול לפי נושאים',         path: '/sheelot-sifrut' },
    ],
  },
]

export default function Landing() {
  const [open, setOpen] = useState(null)

  function toggle(name) {
    setOpen(prev => (prev === name ? null : name))
  }

  return (
    <>
      <a className="skip-link" href="#main-content">דלג לתוכן</a>
      <TopBar />
      <div className="page">
        <main id="main-content">
          {/* Hero */}
          <section className="hero" aria-label="כרטיס ביקור">
            <img
              className="hero-photo"
              src="/amit-photo.jpg"
              alt="עמית מורה פרטית"
              width="160"
              height="160"
            />
            <div className="hero-text">
              <div className="hero-subjects">היסטוריה · אזרחות · תנ״ך · ספרות</div>
              <h1 className="hero-name">עמית משולם דינר</h1>
              <p className="hero-bio">
                מורה פרטית לבגרויות עם <strong>ניסיון של מעל 10 שנה</strong>.
                מתמחה בהיסטוריה, אזרחות, תנ״ך וספרות.
                חומרי לימוד, סיכומים ושאלות לתרגול — הכל כאן, בחינם.
              </p>
              <div className="hero-buttons">
                <a
                  href="tel:+972544248782"
                  className="hero-phone"
                  aria-label="התקשרי לעמית"
                >
                  <i className="ti ti-phone" aria-hidden="true" />
                  054-4248782
                </a>
                <a
                  href="https://wa.me/972544248782"
                  className="hero-whatsapp"
                  target="_blank"
                  rel="noopener"
                  aria-label="שלחי הודעת WhatsApp לעמית (נפתח בחלון חדש)"
                >
                  <i className="ti ti-brand-whatsapp" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </section>

          <div className="divider" />

          {/* Subject cards */}
          <section className="subjects-section" aria-label="נושאי לימוד">
            <div className="subjects-label">בחרי נושא לימוד</div>
            <div className="subjects-grid">
              {SUBJECTS.map(sub => (
                <div
                  key={sub.name}
                  className={`subject-card${open === sub.name ? ' open' : ''}`}
                >
                  <button
                    className="subject-header"
                    onClick={() => toggle(sub.name)}
                    aria-expanded={open === sub.name}
                    aria-controls={`links-${sub.name}`}
                  >
                    <i className={`ti ${sub.icon} subject-icon`} aria-hidden="true" />
                    <span>{sub.name}</span>
                    <i className="ti ti-chevron-down subject-chevron" aria-hidden="true" />
                  </button>
                  <div
                    id={`links-${sub.name}`}
                    className="subject-links"
                    role="region"
                    aria-label={`חומרי לימוד — ${sub.name}`}
                  >
                    {sub.links.map(lnk => (
                      <Link
                        key={lnk.path}
                        to={lnk.path}
                        className="subject-link"
                      >
                        <span>{lnk.label}</span>
                        <i className="ti ti-arrow-left" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <AccessibilityPanel />
    </>
  )
}

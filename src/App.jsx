import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import SubPage from './pages/SubPage'

const PAGES = [
  { path: '/summary-history',         subject: 'היסטוריה', title: 'סיכום הנושאים — בנקודות',    folder: 'summary-history',         count: 5 },
  { path: '/guidance-history',        subject: 'היסטוריה', title: 'הדרכה למענה על שאלות',       folder: 'guidance-history',        count: 4 },
  { path: '/sheelot-history',         subject: 'היסטוריה', title: 'שאלות לתרגול לפי נושאים',   folder: 'sheelot-letirgul-history', count: 5 },
  { path: '/summary-ezrahut',         subject: 'אזרחות',   title: 'סיכום החומר לבגרות',         folder: 'summary-ezrahut',         count: 22, skip: [12] },
  { path: '/guidance-ezrahut',        subject: 'אזרחות',   title: 'הדרכה למענה על שאלות',       folder: 'guidance-ezrahut',        count: 3 },
  { path: '/sheelot-ezrahut',         subject: 'אזרחות',   title: 'שאלות לתרגול לפי נושאים',   folder: 'sheelot-letirgul-ezrahut', count: 18 },
  { path: '/summary-tanach',          subject: 'תנ״ך',     title: 'סיכום החומר — בנקודות',      folder: 'summary-tanach',          count: 7 },
  { path: '/guidance-tanach',         subject: 'תנ״ך',     title: 'הדרכה למענה על שאלות',       folder: 'guidance-tanach',         count: 2 },
  { path: '/sheelot-tanach',          subject: 'תנ״ך',     title: 'שאלות לתרגול לפי נושאים',   folder: 'sheelot-letirgul-tanach', count: 10 },
  { path: '/guidance-sifrut',         subject: 'ספרות',    title: 'הדרכה למענה על שאלות',       folder: 'guidance-sifrut',         count: 6 },
  { path: '/sheelot-sifrut',          subject: 'ספרות',    title: 'שאלות לתרגול לפי נושאים',   folder: 'sheelot-letirgul-sifrut', count: 7 },
]

export { PAGES }

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing pages={PAGES} />} />
        {PAGES.map(p => (
          <Route key={p.path} path={p.path} element={<SubPage {...p} />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

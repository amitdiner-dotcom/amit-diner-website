export default function TopBar() {
  return (
    <div className="top-bar" role="navigation" aria-label="רשתות חברתיות">
      <a href="https://www.youtube.com/@%D7%A2%D7%9E%D7%99%D7%AA%D7%9E%D7%95%D7%A8%D7%94%D7%A4%D7%A8%D7%98%D7%99%D7%AA" target="_blank" rel="noopener" aria-label="ערוץ יוטיוב של עמית (נפתח בחלון חדש)">
        <i className="ti ti-brand-youtube" aria-hidden="true" /> יוטיוב
      </a>
      <a href="https://www.tiktok.com/@amitmeshulamdiner" target="_blank" rel="noopener" aria-label="ערוץ טיק טוק של עמית (נפתח בחלון חדש)">
        <i className="ti ti-brand-tiktok" aria-hidden="true" /> טיק טוק
      </a>
    </div>
  )
}

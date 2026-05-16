import { useState, useEffect } from 'react'

export default function AccessibilityPanel() {
  const [open, setOpen] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [noAnim, setNoAnim] = useState(false)

  useEffect(() => {
    try {
      const prefs = JSON.parse(localStorage.getItem('access-prefs') || '{}')
      if (prefs.largeText)    toggle('largeText', true)
      if (prefs.highContrast) toggle('highContrast', true)
      if (prefs.noAnim)       toggle('noAnim', true)
    } catch {}
  }, [])

  function toggle(key, force) {
    const val = force !== undefined ? force : !(key === 'largeText' ? largeText : key === 'highContrast' ? highContrast : noAnim)
    const cls = key === 'largeText' ? 'large-text' : key === 'highContrast' ? 'high-contrast' : 'no-animations'
    document.body.classList.toggle(cls, val)
    if (key === 'largeText')    setLargeText(val)
    if (key === 'highContrast') setHighContrast(val)
    if (key === 'noAnim')       setNoAnim(val)
    try {
      const prefs = JSON.parse(localStorage.getItem('access-prefs') || '{}')
      prefs[key] = val
      localStorage.setItem('access-prefs', JSON.stringify(prefs))
    } catch {}
  }

  function reset() {
    document.body.classList.remove('large-text', 'high-contrast', 'no-animations')
    setLargeText(false); setHighContrast(false); setNoAnim(false)
    localStorage.removeItem('access-prefs')
  }

  return (
    <>
      <button
        className="access-btn"
        aria-label={open ? 'סגור תפריט נגישות' : 'פתח תפריט נגישות'}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <i className="ti ti-wheelchair" aria-hidden="true" />
        <span>נגישות</span>
      </button>

      {open && (
        <div className="access-panel" role="dialog" aria-label="תפריט נגישות">
          <div className="access-title">אפשרויות נגישות</div>
          <button className={`access-option${largeText ? ' active' : ''}`} onClick={() => toggle('largeText')} aria-pressed={largeText}>
            <i className="ti ti-text-increase" aria-hidden="true" /> הגדלת טקסט
          </button>
          <button className={`access-option${highContrast ? ' active' : ''}`} onClick={() => toggle('highContrast')} aria-pressed={highContrast}>
            <i className="ti ti-contrast" aria-hidden="true" /> ניגודיות גבוהה
          </button>
          <button className={`access-option${noAnim ? ' active' : ''}`} onClick={() => toggle('noAnim')} aria-pressed={noAnim}>
            <i className="ti ti-player-pause" aria-hidden="true" /> ביטול אנימציות
          </button>
          <button className="access-reset" onClick={reset}>איפוס הגדרות</button>
        </div>
      )}
    </>
  )
}

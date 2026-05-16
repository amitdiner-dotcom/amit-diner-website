export default function PdfList({ folder, count, skip = [] }) {
  const nums = []
  for (let i = 1; i <= count + skip.length; i++) {
    if (!skip.includes(i)) nums.push(i)
    if (nums.length === count) break
  }

  return (
    <div className="pdf-list">
      {nums.map(n => (
        <div key={n} className="pdf-item">
          <iframe
            src={`/pdfs/${folder}/${n}.pdf`}
            title={`מסמך ${n}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

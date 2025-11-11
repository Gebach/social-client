function InfoOutput({ label, text }) {
  return (
    <div>
      <p>{label}:</p>
      <div className="border rounded-lg max-w-full w-full py-1.5 px-2 mt-0.5">{text}</div>
    </div>
  )
}

export default InfoOutput

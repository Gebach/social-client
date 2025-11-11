import InfoOutput from '../../shared/InfoOutput/InfoOutput'

function InfoContainer({ obj }) {
  return (
    <div className="max-w-96 w-full p-2 flex flex-col justify-between gap-2">
      {Object.entries(obj).map(([key, value]) => (
        <InfoOutput key={key} label={key} text={typeof value === 'boolean' ? (value ? 'Да' : 'Нет') : String(value)} />
      ))}
    </div>
  )
}

export default InfoContainer

export default function EmptyIndicator ({
  text,
  buttonText,
  onClick
} : {
  text: string,
  buttonText: string,
  onClick: () => void
}) {
  return (
    <div className={"EmptyIndicator"}>
      <div>
        {text}
      </div>

      <div>
        <button className={"button"} onClick={onClick}>{buttonText}</button>
      </div>
    </div>
  )
}
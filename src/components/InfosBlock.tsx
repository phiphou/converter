import infoIcon from "../assets/icons/info.svg"

function InfosBlock({label, info}: {label: string; info: string}) {
  return (
    <div
      data-testid="info-block"
      className="mt-4 flex min-w-60 gap-2 text-left align-middle leading-[1.6] text-black dark:text-white"
    >
      <img src={infoIcon} className="mr-1 h-6 w-6 lg:mr-0" />
      <span dangerouslySetInnerHTML={{__html: `${label} ${label !== "" ? ":" : ""} ${info}`}} />
    </div>
  )
}

export default InfosBlock

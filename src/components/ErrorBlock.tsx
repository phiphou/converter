import WarningIcon from "../assets/icons/warning.svg"

function ErrorBlock({info}: {info: string}) {
  return (
    <div className="mt-4 flex min-w-60 gap-2 text-left align-middle leading-[1.6] text-black dark:text-white">
      <img src={WarningIcon} className="mr-1 h-6 w-6 lg:mr-0" />
      <span dangerouslySetInnerHTML={{__html: `${info}`}} />
    </div>
  )
}

export default ErrorBlock

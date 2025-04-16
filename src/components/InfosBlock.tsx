import infoIcon from '../assets/icons/info.svg'

function InfosBlock({ label, info }: { label: string; info: string }) {
  return (
    <div className="gap-1 mt-12 min-w-60 text-left flex align-middle dark:text-white text-black leading-[1.6]">
      <img src={infoIcon} className="w-6 h-6 mr-1 lg:mr-0 " />

      <span dangerouslySetInnerHTML={{ __html: `${label} : ${info}` }} />
    </div>
  )
}

export default InfosBlock

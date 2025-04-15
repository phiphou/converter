import moonIcon from '../assets/icons/moon.svg'
import sunIcon from '../assets/icons/sun.svg'

function Dark_mode_button({ dark, darkModeHandler }: { dark: boolean; darkModeHandler: () => void }) {
  return (
    <button
      id="theme-toggle"
      onClick={() => darkModeHandler()}
      type="button"
      className="m-0 pt-[12px] w-6 h-6  rounded-lg focus:outline-none outline-none text-amber-500"
    >
      {!dark ? <img src={moonIcon} className="w-4 h-4 mr-2" /> : <img src={sunIcon} className="w-4 h-4 mr-2" />}
    </button>
  )
}

export default Dark_mode_button

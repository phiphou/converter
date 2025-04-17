import {useEffect, useState} from "react"
import moonIcon from "../assets/icons/moon.svg"
import sunIcon from "../assets/icons/sun.svg"

function DarkModeButton() {
  const [dark, setDark] = useState(true)

  const darkModeHandler = () => {
    setDark(!dark)
    if (dark) document.documentElement.setAttribute("data-theme", "light")
    else document.documentElement.setAttribute("data-theme", "dark")

    const darkIcon = document.getElementById("theme-toggle-dark-icon")
    const lightIcon = document.getElementById("theme-toggle-light-icon")

    if (darkIcon && lightIcon) {
      darkIcon.classList.toggle("hidden")
      lightIcon.classList.toggle("hidden")
      if (
        localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        darkIcon.classList.remove("hidden")
      } else {
        lightIcon.classList.remove("hidden")
      }
    }

    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") localStorage.setItem("color-theme", "dark")
      else localStorage.setItem("color-theme", "light")
    } else {
      if (document.documentElement.classList.contains("dark")) localStorage.setItem("color-theme", "light")
      else localStorage.setItem("color-theme", "dark")
    }
  }

  useEffect(() => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        setDark(false)
        document.documentElement.setAttribute("data-theme", "light")
      } else {
        setDark(true)
        document.documentElement.setAttribute("data-theme", "dark")
      }
    } else {
      setDark(true)
      document.documentElement.setAttribute("data-theme", "dark")
    }
  }, [])
  return (
    <button
      id="theme-toggle"
      onClick={() => darkModeHandler()}
      type="button"
      className="m-0 h-6 w-6 rounded-lg pt-[12px] outline-none focus:outline-none"
    >
      {!dark ? <img src={moonIcon} className="mr-2 h-4 w-4" /> : <img src={sunIcon} className="mr-2 h-4 w-4" />}
    </button>
  )
}

export default DarkModeButton

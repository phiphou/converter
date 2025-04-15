import { useEffect, useState } from 'react'
import moonIcon from '../assets/icons/moon.svg'
import sunIcon from '../assets/icons/sun.svg'

function Dark_mode_button() {
  const [dark, setDark] = useState(true)

  const darkModeHandler = () => {
    setDark(!dark)
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
    }

    const darkIcon = document.getElementById('theme-toggle-dark-icon')
    const lightIcon = document.getElementById('theme-toggle-light-icon')

    if (darkIcon && lightIcon) {
      darkIcon.classList.toggle('hidden')
      lightIcon.classList.toggle('hidden')
      if (
        localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        darkIcon.classList.remove('hidden')
      } else {
        lightIcon.classList.remove('hidden')
      }
    }

    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        localStorage.setItem('color-theme', 'dark')
      } else {
        localStorage.setItem('color-theme', 'light')
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('color-theme', 'light')
      } else {
        localStorage.setItem('color-theme', 'dark')
      }
    }
  }

  useEffect(() => {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        setDark(false)
        document.documentElement.setAttribute('data-theme', 'light')
      } else {
        setDark(true)
        document.documentElement.setAttribute('data-theme', 'dark')
      }
    } else {
      setDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])
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

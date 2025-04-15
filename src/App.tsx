import './App.css'
import Form from './components/Form'
import mainLogo from './assets/logo.png'
import { useEffect, useState } from 'react'

function App() {
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
    // if set via local storage previously
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
    <div className="m-0">
      <img src={mainLogo} className="logo" />
      <h2 className=" text-black dark:text-white">Convertisseur pour journaliste</h2>
      <div className="min-w-full">
        <Form />
      </div>
      <footer className="text-center mt-1 mb-1 text-sm text-gray-500 dark:text-gray-400">
        <button
          id="theme-toggle"
          onClick={() => darkModeHandler()}
          type="button"
          className="m-0 pt-[12px] w-6 h-6  rounded-lg focus:outline-none outline-none text-amber-500"
        >
          {!dark ? (
            <svg
              id="theme-toggle-dark-icon"
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17.8 13.8a1 1 0 0 0-.9-.6A7.5 7.5 0 0 1 10.5 2a1 1 0 0 0 0-1 1 1 0 0 0-.8-.5h-.1a9.5 9.5 0 1 0 8.2 14.2 1 1 0 0 0 0-1Z" />
            </svg>
          ) : (
            <svg
              id="theme-toggle-light-icon"
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.3 5.8a1 1 0 0 0 1.5-1.5L4.3 3A1 1 0 0 0 3 4.3l1.4 1.5Zm11.4 8.4a1 1 0 0 0-1.5 1.5l1.5 1.4a1 1 0 0 0 1.4-1.4l-1.4-1.5ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.3 14.2 3 15.7A1 1 0 1 0 4.3 17l1.5-1.4a1 1 0 0 0-1.5-1.5ZM15 6a1 1 0 0 0 .8-.2L17 4.3A1 1 0 1 0 15.7 3l-1.5 1.4A1 1 0 0 0 15 6Z" />
            </svg>
          )}
        </button>
        © {new Date().getFullYear()} @Phiphou Tous droits réservés. Contribuez sur{' '}
        <a href="http://github.com/phiphou/converter" target="_blank">
          Github
        </a>
      </footer>
    </div>
  )
}

export default App

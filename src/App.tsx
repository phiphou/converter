import './App.css'
import Form from './components/Form'
import mainLogo from './assets/logo.png'
import { useEffect, useState } from 'react'
import Dark_mode_button from './components/dark_mode_button'

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
        <Dark_mode_button dark={dark} darkModeHandler={darkModeHandler} />© {new Date().getFullYear()} @Phiphou Tous
        droits réservés. Contribuez sur{' '}
        <a href="http://github.com/phiphou/converter" target="_blank">
          Github
        </a>
      </footer>
    </div>
  )
}

export default App

import './App.css'
import Form from './components/Form'
import mainLogo from './assets/logo.png'
import DarkModebutton from './components/DarkModeButton'

function App() {
  return (
    <div className="pb-0 ">
      <div className="mx-auto flex items-center justify-center lg:mt-10 lg:pt-7">
        <img src={mainLogo} className="logo" />
        <h2 className=" text-black dark:text-white">Convertisseur pour journaliste</h2>
      </div>

      <div className="lg:min-w-[600px] lg:max-w-[800px] mx-auto">
        <Form />
      </div>
      <footer className="text-center mt-auto mb-2 text-sm text-gray-500 dark:text-gray-400">
        <DarkModebutton />© {new Date().getFullYear()} @Phiphou Tous droits réservés. Contribuez sur{' '}
        <a href="http://github.com/phiphou/converter" target="_blank">
          Github
        </a>
      </footer>
    </div>
  )
}

export default App

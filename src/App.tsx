import './App.css'
import Form from './components/Form'
import mainLogo from './assets/logo.png'
import Dark_mode_button from './components/dark_mode_button'

function App() {
  return (
    <div className="pb-3 container">
      <div className="flex gap-2 mt-10">
        <img src={mainLogo} className="logo" />
        <h2 className=" text-black dark:text-white">Convertisseur pour journaliste</h2>
      </div>

      <div className="min-w-[600px] max-w-[800px]">
        <Form />
      </div>
      <footer className="text-center mt-1 mb-2 text-sm text-gray-500 dark:text-gray-400">
        <Dark_mode_button />© {new Date().getFullYear()} @Phiphou Tous droits réservés. Contribuez sur{' '}
        <a href="http://github.com/phiphou/converter" target="_blank">
          Github
        </a>
      </footer>
    </div>
  )
}

export default App

import './App.css'
import Form from './components/Form'
import mainLogo from './assets/logo.png'

function App() {
  return (
    <div className="m-0">
      <img src={mainLogo} className="logo" />
      <h2 className="">Convertisseur pour journaliste</h2>
      <div className="min-w-full">
        <Form />
      </div>
      <footer className="text-center mt-1 mb-1 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} @Phiphou Tous droits réservés. Contribuez sur{' '}
        <a href="http://github.com/phiphou/converter" target="_blank">
          Github
        </a>
      </footer>
    </div>
  )
}

export default App

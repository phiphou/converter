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
      <span className="block text-base mt-3 mb-0  font-semibold  text-gray-300 text-center dark:text-gray-300">
        © 2025 Phiphou
      </span>
    </div>
  )
}

export default App

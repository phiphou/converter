import './App.css'
import Form from './components/Form'
import mainLogo from './assets/logo.png'

function App() {
  return (
    <div>
      <img src={mainLogo} className="logo" />
      <h2>Convertisseur pour journaliste</h2>
      <div className="min-w-full">
        <Form />
      </div>
    </div>
  )
}

export default App

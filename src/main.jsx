import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DogBreedContextProvider } from './context/DogBreedContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DogBreedContextProvider>
    <App />
  </DogBreedContextProvider>
)

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DogBreedContextProvider from './components/DogBreedContextProvider/DogBreedContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DogBreedContextProvider>
    <App />
  </DogBreedContextProvider>
)

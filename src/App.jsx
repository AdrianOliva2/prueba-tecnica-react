import './App.css'
import { useState } from 'react'
import { DogImageGrid } from './components/DogImageGrid/DogImageGrid'
import { DogSelector } from './components/DogSelector/DogSelector'
import { createContext } from 'react'

export const DogBreedContext = createContext(null)

function App() {
  const [selectedDogBreed, setSelectedDogBreed] = useState('')

  return (
    <DogBreedContext.Provider value={{ selectedDogBreed, setSelectedDogBreed }}>
      <div className='container'>
        <header>
          <h1>App de perros</h1>
          <DogSelector setSelectedDogBreed={setSelectedDogBreed} />
        </header>
        <main>
          <DogImageGrid />
        </main>
      </div>
    </DogBreedContext.Provider>
  )
}

export default App

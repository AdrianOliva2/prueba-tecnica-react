import { useState } from 'react'
import { DogBreedContext } from '../../context/DogBreedContext'

export default function DogBreedContextProvider({ children }) {
  const [selectedDogBreed, setSelectedDogBreed] = useState('')

  return (
    <DogBreedContext.Provider value={{ selectedDogBreed, setSelectedDogBreed }}>
      {children}
    </DogBreedContext.Provider>
  )
}

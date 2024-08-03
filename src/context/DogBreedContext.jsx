import { createContext, useState, useContext } from 'react'

export const DogBreedContext = createContext(null)

export function DogBreedContextProvider({ children }) {
  const [selectedDogBreed, setSelectedDogBreed] = useState('')

  return (
    <DogBreedContext.Provider value={{ selectedDogBreed, setSelectedDogBreed }}>
      {children}
    </DogBreedContext.Provider>
  )
}

export function useDogBreedContext() {
  const context = useContext(DogBreedContext)

  if (!context)
    throw new Error(
      'useDogBreedContext must be used the scope of DogBreedProvider'
    )

  return { context }
}

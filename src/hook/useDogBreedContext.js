import { useContext } from 'react'
import { DogBreedContext } from '../context/DogBreedContext'

export default function useDogBreedContext() {
  const context = useContext(DogBreedContext)

  if (!context)
    throw new Error(
      'useDogBreedContext must be used the scope of DogBreedProvider'
    )

  return { context }
}

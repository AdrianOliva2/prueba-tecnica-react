import { useEffect, useState } from 'react'
import { getDogBreeds } from '../service/dogBreeds'

export default function useDogBreeds() {
  const [dogBreeds, setDogBreeds] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    getDogBreeds()
      .then((dogBreeds) => {
        setDogBreeds(dogBreeds)
      })
      .catch((error) => {
        console.error(error)
        setError(error.message)
      })
  }, [])

  return { dogBreeds, error }
}

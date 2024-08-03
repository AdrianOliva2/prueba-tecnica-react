import { useEffect, useState } from 'react'
import { getDogBreeds } from '../service/dogBreeds'

export default function useDogBreeds() {
  const [dogBreeds, setDogBreeds] = useState({})

  useEffect(() => {
    getDogBreeds().then((dogBreeds) => {
      setDogBreeds(dogBreeds)
    })
  }, [])

  return { dogBreeds }
}

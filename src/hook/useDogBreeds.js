import { useEffect, useState } from 'react'
import { getDogBreeds } from '../service/dogBreeds'

export const useDogBreeds = () => {
  const [dogBreeds, setDogBreeds] = useState({})

  useEffect(() => {
    getDogBreeds().then((dogBreeds) => {
      setDogBreeds(dogBreeds)
    })
  }, [])

  return { dogBreeds }
}

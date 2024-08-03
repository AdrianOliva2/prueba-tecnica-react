import { useEffect, useState } from 'react'
import { getDogImages } from '../service/dogImages'
import useDogBreedContext from './useDogBreedContext'

export default function useDogImages() {
  const { context } = useDogBreedContext()
  const { selectedDogBreed } = context
  const [dogImages, setDogImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (selectedDogBreed) {
      setLoading(true)
      const [breed] = selectedDogBreed.split('-')
      getDogImages(breed)
        .then((dogImages) => {
          const filteredSubBreedImages = dogImages.filter((image) => {
            return image.includes(selectedDogBreed)
          })
          setDogImages(filteredSubBreedImages)
          setLoading(false)
        })
        .catch((error) => {
          console.error(error)
          setError(error.message)
          setLoading(false)
        })
    } else {
      setDogImages([])
    }
  }, [selectedDogBreed])

  return { dogImages, loading, error }
}

import { useEffect, useState } from 'react'
import { getDogImages } from '../service/dogImages'
import useDogBreedContext from './useDogBreedContext'

export default function useDogImages() {
  const { context } = useDogBreedContext()
  const { selectedDogBreed } = context
  const [dogImages, setDogImages] = useState([])

  useEffect(() => {
    if (selectedDogBreed) {
      const [breed] = selectedDogBreed.split('-')
      getDogImages(breed).then((dogImages) => {
        const filteredSubBreedImages = dogImages.filter((image) => {
          return image.includes(selectedDogBreed)
        })
        setDogImages(filteredSubBreedImages)
      })
    } else {
      setDogImages([])
    }
  }, [selectedDogBreed])

  return { dogImages }
}

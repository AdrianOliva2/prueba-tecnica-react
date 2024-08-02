import { useContext, useEffect, useState } from 'react'
import { getDogImages } from '../service/dogImages'
import { DogBreedContext } from '../src/App'

export function useDogImages() {
  const { selectedDogBreed } = useContext(DogBreedContext)
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

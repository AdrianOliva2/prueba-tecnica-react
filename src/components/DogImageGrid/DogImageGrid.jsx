import './DogImageGrid.css'
import { useContext, useId } from 'react'
import { useDogImages } from '../../../hook/useDogImages'
import { DogBreedContext } from '../../App'

export function DogImageGrid() {
  const id = useId()
  const { dogImages } = useDogImages()
  const { selectedDogBreed } = useContext(DogBreedContext)

  return (
    selectedDogBreed && (
      <>
        <h2 className='breed-text'>
          Imágenes de perros de la raza {selectedDogBreed}
        </h2>
        <div className='images'>
          {dogImages.map((dogImage) => {
            return (
              <img
                key={`${id}-${dogImage}`}
                src={dogImage}
                alt={`Perro de la raza ${selectedDogBreed}`}
                className='dog-image'
              />
            )
          })}
        </div>
      </>
    )
  )
}

import './DogImageGrid.css'
import useDogImages from '../../hook/useDogImages'
import useDogBreedContext from '../../hook/useDogBreedContext'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import ImageModal from '../ImageModal/ImageModal'

export default function DogImageGrid() {
  const { dogImages } = useDogImages()
  const { context } = useDogBreedContext()
  const { selectedDogBreed } = context
  const [showModal, setShowModal] = useState(false)
  const [modalImage, setModalImage] = useState('')

  const handleClickImage = (dogImage) => {
    setShowModal(true)
    setModalImage(dogImage)
  }

  return (
    selectedDogBreed && (
      <div className='grid place-items-center'>
        <h2 className='breed-text text-xl font-bold text-center mx-2'>
          Imágenes de perros de la raza{' '}
          <span className='capitalize'>{selectedDogBreed}</span>
        </h2>
        <div className='max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
          {dogImages.map((dogImage) => {
            return (
              <img
                key={dogImage}
                src={dogImage}
                alt={`Perro de la raza ${selectedDogBreed}`}
                className='w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105 cursor-pointer border-4 border-black/70 shadow-lg'
                onClick={() => handleClickImage(dogImage)}
              />
            )
          })}
        </div>
        {showModal &&
          createPortal(
            <ImageModal
              dogImage={modalImage}
              onClose={() => setShowModal(false)}
            />,
            document.getElementById('root')
          )}
      </div>
    )
  )
}

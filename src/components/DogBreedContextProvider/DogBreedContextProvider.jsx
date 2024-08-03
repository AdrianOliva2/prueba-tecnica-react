import { useState } from 'react'
import PropTypes from 'prop-types'
import { DogBreedContext } from '../../context/DogBreedContext'

DogBreedContextProvider.propTypes = {
  children: PropTypes.node
}

export default function DogBreedContextProvider({ children }) {
  const [selectedDogBreed, setSelectedDogBreed] = useState('')

  return (
    <DogBreedContext.Provider value={{ selectedDogBreed, setSelectedDogBreed }}>
      {children}
    </DogBreedContext.Provider>
  )
}

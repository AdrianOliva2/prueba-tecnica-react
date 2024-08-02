import './DogSelector.css'
import { useContext, useId } from 'react'
import { useDogBreeds } from '../../../hook/useDogBreeds'
import { DogBreedContext } from '../../App'

export function DogSelector() {
  const { dogBreeds } = useDogBreeds()
  const { selectedDogBreed, setSelectedDogBreed } = useContext(DogBreedContext)
  const id = useId()

  const handleBreedChange = (event) => {
    setSelectedDogBreed(event.target.value)
  }

  const handleSubBreedChange = (event) => {
    if (selectedDogBreed.includes('-')) {
      const [breed] = selectedDogBreed.split('-')
      const newBreed = `${breed}-${event.target.value}`
      setSelectedDogBreed(newBreed)
    } else {
      setSelectedDogBreed(`${selectedDogBreed}-${event.target.value}`)
    }
  }

  const isSubBreedActive = () => {
    if (
      (dogBreeds &&
        selectedDogBreed !== '' &&
        selectedDogBreed.includes('-')) ||
      (dogBreeds[selectedDogBreed] && dogBreeds[selectedDogBreed].length > 2)
    ) {
      return true
    }
  }

  return (
    <form className='form'>
      <select onChange={handleBreedChange}>
        <option value=''>Selecciona una raza de perro</option>
        {Object.keys(dogBreeds).map((dogBreed) => {
          return (
            <option key={`${id}-${dogBreed}`} value={dogBreed}>
              {dogBreed}
            </option>
          )
        })}
      </select>
      {isSubBreedActive() && (
        <select onChange={handleSubBreedChange}>
          {!selectedDogBreed.includes('-')
            ? dogBreeds[selectedDogBreed].map((subBreed) => {
                return (
                  <option key={`${id}-${subBreed}`} value={subBreed}>
                    {subBreed}
                  </option>
                )
              })
            : dogBreeds[selectedDogBreed.split('-')[0]].map((subBreed) => {
                return (
                  <option key={`${id}-${subBreed}`} value={subBreed}>
                    {subBreed}
                  </option>
                )
              })}
        </select>
      )}
    </form>
  )
}

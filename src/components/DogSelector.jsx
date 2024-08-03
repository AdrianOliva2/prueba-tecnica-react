import Select from './Select'
import useDogBreeds from '../hook/useDogBreeds'
import { useDogBreedContext } from '../context/DogBreedContext'
import ErrorAlert from './ErrorAlert'

export default function DogSelector() {
  const { dogBreeds, error } = useDogBreeds()
  const { context } = useDogBreedContext()
  const { selectedDogBreed, setSelectedDogBreed } = context

  const handleBreedChange = (event) => {
    setSelectedDogBreed(event.target.value)
  }

  const handleSubBreedChange = (event) => {
    if (event.target.value === '') {
      setSelectedDogBreed(selectedDogBreed.split('-')[0])
      return
    }
    if (selectedDogBreed.includes('-')) {
      const [breed] = selectedDogBreed.split('-')
      const newBreed = `${breed}-${event.target.value}`
      setSelectedDogBreed(newBreed)
    } else {
      setSelectedDogBreed(`${selectedDogBreed}-${event.target.value}`)
    }
  }

  const isSubBreedActive =
    dogBreeds?.[selectedDogBreed]?.length > 1 || selectedDogBreed.includes('-')

  return error ? (
    <ErrorAlert error={error} />
  ) : (
    <form className='max-w-sm mx-auto'>
      <div className='flex justify-center xl:flex-row lg:flex-row md:flex-row sm:lg:flex-row flex-col'>
        <Select
          aria-label='breed'
          onChange={handleBreedChange}
          data={Object.keys(dogBreeds)}
          placeHolder='Selecciona una raza de perro'
        />
        {isSubBreedActive && (
          <Select
            aria-label='subBreed'
            onChange={handleSubBreedChange}
            data={
              !selectedDogBreed.includes('-')
                ? dogBreeds[selectedDogBreed]
                : dogBreeds[selectedDogBreed.split('-')[0]]
            }
            placeHolder='Selecciona una subraza de perro'
          />
        )}
      </div>
    </form>
  )
}

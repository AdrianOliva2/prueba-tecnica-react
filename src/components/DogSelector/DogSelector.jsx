import './DogSelector.css'
import useDogBreeds from '../../hook/useDogBreeds'
import Select from '../Select/Select'
import useDogBreedContext from '../../hook/useDogBreedContext'
import ErrorAlert from '../Alert/ErrorAlert'

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
        <Select aria-label='breed' onChange={handleBreedChange}>
          <option value=''>Selecciona una raza de perro</option>
          {Object.keys(dogBreeds).map((dogBreed) => {
            return (
              <option key={dogBreed} value={dogBreed}>
                {dogBreed}
              </option>
            )
          })}
        </Select>
        {isSubBreedActive && (
          <Select aria-label='subBreed' onChange={handleSubBreedChange}>
            <option value=''>Selecciona una subraza de perro</option>
            {!selectedDogBreed.includes('-')
              ? dogBreeds[selectedDogBreed].map((subBreed) => {
                  return (
                    <option key={subBreed} value={subBreed}>
                      {subBreed}
                    </option>
                  )
                })
              : dogBreeds[selectedDogBreed.split('-')[0]].map((subBreed) => {
                  return (
                    <option key={subBreed} value={subBreed}>
                      {subBreed}
                    </option>
                  )
                })}
          </Select>
        )}
      </div>
    </form>
  )
}

const API_URL = 'https://dog.ceo/api/breeds/list/all'

export const getDogBreeds = async () => {
  const response = await fetch(API_URL)
  const data = await response.json()
  return data.message
}

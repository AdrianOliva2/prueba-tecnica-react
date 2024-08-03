const API_URL = 'https://dog.ceo/api/breeds/list/all'

export async function getDogBreeds() {
  const response = await fetch(API_URL)
  const data = await response.json()
  return data.message
}

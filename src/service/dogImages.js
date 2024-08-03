const API_URL = 'https://dog.ceo/api/breed/'

export async function getDogImages(breed) {
  const response = await fetch(`${API_URL}${breed}/images`)
  const data = await response.json()
  return data.message
}

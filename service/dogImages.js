const API_URL = 'https://dog.ceo/api/breed/'

export const getDogImages = async (breed) => {
  const response = await fetch(`${API_URL}${breed}/images`)
  const data = await response.json()
  return data.message
}

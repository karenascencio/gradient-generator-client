const BASE_URL = 'http://localhost:8080'

export const getThemes = async () => {
  const response = await fetch(`${BASE_URL}/themes`)
  const json = await response.json()
  return json.data.allThemes
}

export const postTheme = async (theme) => {
  const config = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(theme)
  }
  const newTheme = await fetch(`${BASE_URL}/themes`, config)
  const response = await newTheme.json()
  return response
}

export default async function (path, method = 'GET', data) {
  const options = { method }
  if (data) {
    options['body'] = JSON.stringify(data)
    options['headers'] = {
      'Content-Type': 'application/json;charset=uft-8'
    }
  }

  try {
    const response = await fetch(path, options)
    if (response.ok) return response.json()
  } catch (error) {
    console.log('error', error)
  }
}
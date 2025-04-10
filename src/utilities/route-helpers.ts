export const APP_ROUTES = {
  SUBMIT_FORM: '/submit-form',
}

export const getServerPort = () => {
  let port

  try {
    port = process.env.PORT
  } catch (error) {
    console.log(error)
  }

  return port ?? import.meta.env.VITE_SERVER_PORT ?? 3000
}

const port = getServerPort()

export const BASE_SERVER_URL =
  import.meta.env.VITE_BASE_SERVER_URL ?? `http://localhost:${port}`

export const constructApiUrl = (route: string) => `${BASE_SERVER_URL}${route}`

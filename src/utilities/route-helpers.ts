export const APP_ROUTES = {
  SUBMIT_FORM: '/submit-form',
}

export const SERVER_PORT = process.env.PORT ?? 3000
export const BASE_SERVER_URL = `http://localhost:${SERVER_PORT}`

export const constructApiUrl = (route: string) => `${BASE_SERVER_URL}${route}`

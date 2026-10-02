import { deleteCookie } from 'h3'

export default defineEventHandler((event) => {
  deleteCookie(event, 'app-auth', {
    path: '/',
    domain: process.env.COOKIE_DOMAIN || undefined
  })
  deleteCookie(event, 'learning-library-auth')
  return { success: true }
})

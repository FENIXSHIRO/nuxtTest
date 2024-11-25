
import { defineEventHandler, getQuery, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const ogrn = query.ogrn as string
  const url = `http://192.168.1.248/api/company_search/company/${ogrn}`

  try {
    const response = await $fetch(url)

    return response
  } catch (error) {
    throw createError({ statusCode: 500, message: error.message })
  }
})

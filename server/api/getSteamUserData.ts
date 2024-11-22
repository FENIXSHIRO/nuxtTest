
import { defineEventHandler, getQuery, createError } from 'h3'

type SteamPlayer = {
  steamid: string
  personaname: string
  avatarfull: string
}

type SteamApiResponse = {
  response: {
    players: SteamPlayer[]
  }
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const steamID = query.steamID as string
  const apiKey = useRuntimeConfig().apiSecret
  const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${steamID}`

  try {
    const response = await $fetch<SteamApiResponse>(url)

    if (response.response.players && response.response.players.length > 0) {
      return response.response.players[0]
    } else {
      throw new Error('Пользователь не найден')
    }
  } catch (error) {
    throw createError({ statusCode: 500, message: error.message })
  }
})

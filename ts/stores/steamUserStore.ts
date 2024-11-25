import { defineStore } from 'pinia'

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

export const useMySteamUserStoreStore = defineStore('mySteamUserStoreStore', {
  state: () => ({
    userID: '',
    userName: '',
    avatarURL: '',
  }),

  actions: {
    async fetchUserData(steamID: string) {
      const apiKey = '019BD4CDB989E7BCAB0BE007F01AFE09'
      const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${steamID}`

      try {
        const data = await $fetch<SteamApiResponse>(url)
        if (data.response.players && data.response.players.length > 0) {
          const player: SteamPlayer = data.response.players[0]
          this.userID = player.steamid
          this.userName = player.personaname
          this.avatarURL = player.avatarfull
        } else {
          throw new Error('Пользователь не найден')
        }
      } catch (error) {
        console.error('Ошибка при получении данных: ', error)
      }
    },
  },
})

import { defineStore } from 'pinia'

type SteamPlayer = {
  steamid: string
  personaname: string
  avatarfull: string
}

export const useMySteamUserStoreStore = defineStore('mySteamUserStoreStore', {
  state: () => ({
    userID: '',
    userName: '',
    avatarURL: '',
  }),

  actions: {
    async fetchUserData(steamID: string) {
      const url = `/api/getSteamUserData?steamID=${steamID}`

      try {
        const player: SteamPlayer = await $fetch(url)

        this.userID = player.steamid
        this.userName = player.personaname
        this.avatarURL = player.avatarfull
      } catch (error) {
        console.error('Ошибка при получении данных: ', error)
      }
    },
  },
})

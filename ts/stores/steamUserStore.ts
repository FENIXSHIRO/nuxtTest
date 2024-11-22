import { defineStore } from 'pinia'

export const useMySteamUserStoreStore = defineStore({
  id: 'mySteamUserStoreStore',
  state: () => ({
    userID: '',
    userName: '',
    avatarURL: '',
  }),
  actions: {
    async fetchUserData(steamID: string) {
      const apiKey = 'APi';
      const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamID}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.response.players && data.response.players.length > 0) {
          const player = data.response.players[0];
          this.userID = player.steamid;
          this.userName = player.personaname;
          this.avatarURL = player.avatarfull;
        } else {
          throw new Error('Пользователь не найден');
        }
      } catch (error) {
        console.error('Ошибка при получении данных: ', error);
      }
    },
  }
})

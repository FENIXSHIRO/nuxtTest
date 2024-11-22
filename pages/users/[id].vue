<script setup lang="ts">
import { useMySteamUserStoreStore } from '@/ts/stores/steamUserStore'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useMySteamUserStoreStore()

// Загружаем данные пользователя при загрузке страницы
store.fetchUserData(route.params.id[0])
</script>

<template>
  <div>
    <p>Current route: {{ route.path }}</p>
    <div v-if="store.userName">
      <h1>{{ store.userName }}</h1>
      <img :src="store.avatarURL" alt="Avatar" />
      <p>Steam ID: {{ store.userID }}</p>
    </div>
    <div v-else>
    <p>Загрузка...</p>
  </div>
  </div>
</template>
  
<style>

</style>
<script setup lang="ts">
import { useMySteamUserStoreStore } from '@/ts/stores/steamUserStore'
import { useRoute, useAsyncData } from 'nuxt/app'

const route = useRoute()
const store = useMySteamUserStoreStore()
const description = ref('User steam data')

const { data: userData } = await useAsyncData('user', async () => {
  await store.fetchUserData(route.params.id.toString())
  const user = {
    userID: store.userID,
    userName: store.userName,
    avatarURL: store.avatarURL
  }
  return user
})

useHead({
  title: userData.value ? `User: ${userData.value.userName}` : 'Loading...',
  meta: [{
    name: 'description',
    content: description
  }]
})

</script>

<template>
  <div class="mx-auto p-5 rounded-md border border-gray-200 w-fit">
    <p>Current route: {{ route.path }}</p>
    <div>
      <h1>{{ userData?.userName }}</h1>
      <img :src="userData?.avatarURL" alt="Avatar" />
      <p>Steam ID: {{ userData?.userID }}</p>
    </div>
  </div>
</template>
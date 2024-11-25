<script setup lang="ts">
import { useCompanyStore } from '~/ts/stores/company'
import { useRoute, useAsyncData } from 'nuxt/app'

const route = useRoute()
const store = useCompanyStore()
const description = ref('User steam data')

await useAsyncData('user', () => store.fetchUserData(route.params.id.toString()).then(() => true))

useHead({
  title: `Компания: ${store.ogrn}`,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>

<template>
  <div class="mx-auto p-5 rounded-md border border-gray-200 w-fit">
    <p>Current route: {{ route.path }}</p>
    <NuxtLink class="text-green-400" to="/">На главную</NuxtLink>
    <div>
      <h1>{{ store.ogrn }}</h1>
      <p>ОГРН: {{ store.ogrn }}</p>
      <p>ИНН: {{ store.inn }}</p>
      <p>Оквед: {{ store.mainOkved.code + ': ' + store.mainOkved.name }}</p>
      <p>Контактное лицо: {{ store.okvedContactPerson }}</p>
      <p>Действует: {{ store.active }}</p>
    </div>
  </div>
</template>
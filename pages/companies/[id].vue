<script setup lang="ts">
import { useCompanyStore } from '~/ts/stores/company'
import { useRoute, useAsyncData } from 'nuxt/app'
import { shallowRef } from 'vue';
import type { YMap } from '@yandex/ymaps3-types';
import { YandexMap, YandexMapDefaultSchemeLayer } from 'vue-yandex-maps';

const route = useRoute()
const store = useCompanyStore()
const description = ref('User steam data')
const map = shallowRef<null | YMap>(null);

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

    <ClientOnly fallback-tag="span" fallback="Maps">
      <p>Карты:</p>
      <yandex-map
          v-model="map"
          :settings="{
            location: {
              center: [37.617644, 55.755819],
              zoom: 9,
            },
          }"
          width="100%"
          height="500px"
      >
        <yandex-map-default-scheme-layer/>
      </yandex-map>
    </ClientOnly>

  </div>
</template>
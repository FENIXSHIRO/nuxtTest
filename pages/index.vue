<script setup lang="ts">
const route = useRoute()
const ogrn = ref('311760419400010');

const findUser = async () => {
  await navigateTo('/companies/' + ogrn.value);
}

useHead({
  title: 'Главная'
})
</script>

<template>
  <div>
    <h1 class="text-2xl">Главная страница</h1>
    <p>Current route: {{ route.path }}</p>
    <InputText type="text" v-model="ogrn" />
    <br>
    <Button label="Find" @click="findUser"/>
  </div>
</template>

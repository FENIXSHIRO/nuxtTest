<script setup lang="ts">
const route = useRoute()
const id = ref(null);

const findUser = async () => {
  await navigateTo('/users/' + id.value);
}
</script>

<template>
  <div>
    <h1 class="text-2xl">Главная страница</h1>
    <p>Current route: {{ route.path }}</p>
    <InputText type="text" v-model="id" />
    <br>
    <Button label="Find" @click="findUser"/>
  </div>
</template>

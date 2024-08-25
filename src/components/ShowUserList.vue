<script setup lang="ts">
import { useFetchData } from '../composables/useFetchData';
import { useAxiosCounter } from '../composables/state';

defineProps<{ msg: string }>()
const url = 'https://reqres.in/api/users?page=1'
const wrongUrl = 'https://reqres.in/apiiiiii/users?page=2'
const { data, error, loading, fetchData } = useFetchData();

</script>

<template>
  <h2>{{ msg }}</h2>
  <div>
    <div class="btn-wrapper">
      <button class="success-btn" :disabled="loading" @click="fetchData(url)">Fetch Data</button>
      <button class="danger-btn" :disabled="loading" @click="fetchData(wrongUrl)">Simulate Fetching data failure</button>
    </div>
    <ul v-if="data">
      <li v-for="item in data.userList" :key="item.id">
        ID: {{ item.id }} email: {{ item.email }}
      </li>
    </ul>
    <p v-if="error" class="error">{{ error }}</p>
    <p v-if="loading">Loading... try: {{ useAxiosCounter.count }}</p>
  </div>
</template>

<style scoped>
.btn-wrapper {
  display: flex;
  justify-content:center;
  column-gap: 20px;
}
.danger-btn {
  border-color: red;
}
.success-btn {
  border-color: green;
}
.error {
  color: red;
}
</style>
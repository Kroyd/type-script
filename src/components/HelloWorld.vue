<template>
  <ul class="list">
    <li 
    class="list-item"
    v-for="item in users" :key="item.id"
    >
    {{ item.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { useUsers } from '@/hooksUser/users';
import { defineComponent } from 'vue';
export default defineComponent({
  async setup() {
    const {users} = await useUsers()

  
  return{
    users
  }
  }
})
</script>

<style>

</style>    
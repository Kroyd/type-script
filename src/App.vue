<template>
  <header class="navbar">
    <h3>Vue + TypeScript</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Главный</router-link>
      </li>
      <li>
        <router-link to="/about">Пользователи</router-link>
      </li>
    </ul>
  </header>
  <main class="container with-nav">
    <router-view/>
  </main>
</template>

<!-- 
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent ({
  methods: {
    // workWithStore() {
    //   this.$store.state.count()
    // }
  }
})
</script>  -->
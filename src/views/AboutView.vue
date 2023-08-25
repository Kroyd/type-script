<template>
  <div class="card">
    <h1>Пользователи</h1>

      <p style="color: red;" v-if="error">{{ error }}</p>


    <suspense v-else>
      <template #default>
        <hello-world></hello-world>
      </template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </suspense>
  </div>
</template>


<script lang="ts">
import { defineComponent, onErrorCaptured, ref, } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
export default defineComponent({
  components: {
    HelloWorld
  },
  setup() {
    const error =  ref<null | unknown>(null)

    onErrorCaptured( e => {
      error.value = e
      return true
    })
    return {
      error
    }
  },
})
</script>
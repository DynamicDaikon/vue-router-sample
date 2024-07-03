<script setup>
import router from '@/router'
import { ref } from 'vue'

const titleStr = ref(router.currentRoute.value.meta.title)
const backPg = () => {
  router.push('/')
}
</script>

<template>
  <header>{{ titleStr }}</header>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <button @click="backPg">戻る</button>
</template>

<style></style>

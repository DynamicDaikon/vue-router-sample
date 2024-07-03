<script setup>
import router from '@/router'
import { ref } from 'vue'

const titleStr = ref(router.currentRoute.value.meta.title)
const toAboutPg = () => {
  router.push({ name: 'about', query: { flg: true } })
}
</script>

<template>
  <header>{{ titleStr }}</header>
  <div>hello</div>

  <button @click="toAboutPg">Aboutページへ</button>
</template>

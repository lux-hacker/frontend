<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const onClick = () => {
  count.value++
}
</script>

<template>
  <div>Clicked {{ count }} times</div>
  <button v-on:click="onClick">INC</button>
</template>

<style scoped>
</style>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['amount'])

const count = ref(0)

const onClick = () => {
  count.value += props.amount
}
</script>

<template>
  <div>Clicked {{ count }} times</div>
  <button v-on:click="onClick"><slot/></button>
</template>

<style scoped>
</style>

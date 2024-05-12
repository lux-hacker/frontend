<script setup lang="ts">
import Clicker from "@/components/Clicker.vue";

const clicked = (n:Number) => {
  alert(`Clicker ${n} clicked`)
}

</script>

<template>
  <div v-for="n in 100">
    <Clicker :amount="1" @button-clicked="() => clicked(n)">
      CUSTOM INC
    </Clicker>
  </div>
</template>

<style scoped>
</style>

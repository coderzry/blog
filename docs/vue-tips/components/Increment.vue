<template>
  <div class="increment-demo-component">
    <div>The count is: {{ count }}</div>

    <button class="button" @click="count++">Increment</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style lang="scss" scoped>
.increment-demo-component {
  .button {
    color: red;
    font-weight: bold;
  }
}
</style>
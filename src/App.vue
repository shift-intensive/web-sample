<script setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
  <VueQueryDevtools />
</template>

<style>
:root {
  font-family: Arial, Helvetica, sans-serif;
}
</style>

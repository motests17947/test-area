<template>
  <Nav id="nav" />
  <main>
    <router-view />
  </main>
</template>
<script lang="ts" setup>
import Nav from '@/components/layout/Nav.vue'
</script>
<style lang="scss" scoped>
#nav {
  @apply absolute inset-0;
}
</style>

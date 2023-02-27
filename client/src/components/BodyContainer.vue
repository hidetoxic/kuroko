<template>
  <n-layout has-sider style="height:calc(100vh - 50px);">
    <slot></slot>
  </n-layout>
</template>

<script setup lang="ts">
import { NLayout } from 'naive-ui'
</script>

<style scoped>
.body-container {
    height:calc(100vh - 60px);
}
</style>

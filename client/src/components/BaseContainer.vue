<template>
  <n-layout-content>
    <div class="page-wrap">
      <router-view>
        <router-view />
      </router-view>
    </div>
  </n-layout-content>
</template>

<script setup lang="ts">
import { NLayoutContent } from 'naive-ui'
</script>

<style scoped lang="less">
.page-wrap{
    padding: 8px;
}
</style>

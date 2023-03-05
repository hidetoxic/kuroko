<!--
 * @Author: hidetodong
 * @Date: 2023-02-27 20:17:05
 * @LastEditTime: 2023-03-05 17:43:26
 * @LastEditors: hidetodong
 * @Description:
 * @FilePath: /kuroko/client/src/pages/push-manage/custom/index.vue
 * HIDETOXIC - 版权所有
-->
<template>
  <div>
    <BarkConfig :config="config" />
  </div>
</template>

<script setup lang="ts">
import BarkConfig from './components/BarkConfig.vue'
import { requestConfigJson } from '@/api'

const config = ref({})

onMounted(async () => {
  console.log('1', 1)

  const res = await requestConfigJson()
  config.value = res
})
</script>

<style scoped>

</style>

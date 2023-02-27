<template>
  <div class="header" flex justify-between align-center>
    <LogoBlock />
    <n-switch @click="()=>{toggleDark()}">切换主题</n-switch>
  </div>
</template>

<script setup lang="ts">
import { NSwitch } from 'naive-ui'
import LogoBlock from '@/components/LogoBlock.vue'
import { useThemeSwitch } from '@/states'

const { toggleDark } = useThemeSwitch()
</script>

<style scoped lang="less">
.header{
    height:60px;
    background-color: #222;
    padding: 16px;
    box-sizing: border-box;
}
</style>

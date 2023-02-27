<template>
    <div class="breakcrumb">
        <n-breadcrumb>
        <n-breadcrumb-item>
        <n-icon :component="MdCash" /> 北京总行</n-breadcrumb-item>
        <n-breadcrumb-item>
        <n-icon :component="MdCash" /> 天津分行</n-breadcrumb-item>
        <n-breadcrumb-item>
        <n-icon :component="MdCash" /> 平山道支行</n-breadcrumb-item>
    </n-breadcrumb>
    </div>
</template>

<script setup lang="ts">
import { NBreadcrumb,NBreadcrumbItem } from 'naive-ui'
import { MdCash } from '@vicons/ionicons4'
</script>

<style scoped lang="less">
.breakcrumb{
    margin: 8px;
    padding:8px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    border-radius:4px;
}
</style>
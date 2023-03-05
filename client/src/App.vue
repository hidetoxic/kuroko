<template>
  <n-config-provider :theme="isDark ? darkTheme : lightTheme" :theme-overrides="themeConfig">
    <n-notification-provider>
      <Header />
      <BodyContainer>
        <SideBar />
        <BaseContainer />
      </BodyContainer>
    </n-notification-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, lightTheme, NConfigProvider, NNotificationProvider } from 'naive-ui'
import { themeConfig } from './config'
import SideBar from '@/components/SideBar.vue'
import BaseContainer from '@/components/BaseContainer.vue'
import BodyContainer from '@/components/BodyContainer.vue'
import Header from '@/components/Header.vue'
import { useThemeSwitch } from '@/states'

const { isDark } = useThemeSwitch()

</script>

<style scoped></style>

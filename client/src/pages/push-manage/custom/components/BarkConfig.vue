<template>
  <div>
    <NCard
      title="Bark配置"
    >
      <div v-for="conf in config.config.config_list" :key="conf.type">
        <n-form
          ref="formRef"
          :label-width="80"
          :model="conf"
          :rules="rules"
        >
          <n-form-item label="Bark服务器地址" path="conf.bark_server">
            <n-input
              v-model:value="conf.bark_server"
              type="text"
              placeholder="Bark服务器地址"
            >
            </n-input>
          </n-form-item>
          <n-form-item label="需要发送的设备列表" path="conf.bark_device_token">
            <n-input
              v-for="(token,index ) in conf.bark_device_token"
              :key="index"
              v-model:value="conf.bark_device_token[index]"
              type="text"
              placeholder="请输入Bark Device Token"
            >
            </n-input>
            <n-button @click="handleAddToken($event,conf)">
              +
            </n-button>
          </n-form-item>
        </n-form>
        <NButton @click="handleSendTestMessage($event,conf)">
          测试发送
        </NButton>
      </div>
    </NCard>
    <!-- <NCard
      title="推送消息配置"
      style="margin-top:8px;"
    >
      <n-form
        ref="formRef"
        :label-width="80"
        :model="messageStruct"
        :rules="rules"
      >
        <n-form-item label="Bark服务器地址" path="conf.bark_server">
          <n-select :options="options">
          </n-select>
        </n-form-item>
      </n-form>
    </NCard> -->
  </div>
</template>

<script setup lang="ts">
import {
  NCard,
  NButton,
  useNotification,
  NInput,
  NFormItem,
  NForm,
  FormRules,
  FormItemRule,
  NSelect
} from 'naive-ui'
import { requestSendMessage } from '@/api'

const notifier = useNotification()

interface Props {
  config :Record<string, any>
}

const config = defineProps<Props>()
const messageStruct = reactive({})
const rules:FormRules = {
  bark_server: [
    {
      required: true,
      trigger: ['input', 'blur']
    }
  ]
}

const handleSendTestMessage = async (e:any, conf:any) => {
  const res = await requestSendMessage({
    message: '测试发送消息',
    token: conf.bark_device_token
  })

  if (res) {
    notifier.success({
      content: '发送成功！',
      duration: 1000
    })
  }
}

const handleAddToken = (e:any, conf:any) => {
  conf.bark_device_token.push('')
}
</script>

<style scoped>

</style>

import { computed, ref } from 'vue'
import {
  createDiscreteApi,
  ConfigProviderProps,
  darkTheme,
  lightTheme
} from 'naive-ui'

const themeRef = ref<'light' | 'dark'>('light')
const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
  theme: themeRef.value === 'light' ? lightTheme : darkTheme
}))

const { message: originMessage, notification: originNotification, dialog: originDialog, loadingBar: originLoadingBar } = createDiscreteApi(
  ['message', 'dialog', 'notification', 'loadingBar'],
  {
    configProviderProps: configProviderPropsRef
  }
)

export const message = originMessage
export const notification = originNotification
export const dialog = originDialog
export const loadingBar = originLoadingBar

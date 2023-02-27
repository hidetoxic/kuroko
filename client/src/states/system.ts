/*
 * @Author: hidetodong
 * @Date: 2023-02-27 20:32:50
 * @LastEditTime: 2023-02-27 20:44:41
 * @LastEditors: hidetodong
 * @Description:
 * @FilePath: /kuroko/client/src/states/system.ts
 * HIDETOXIC - 版权所有
 */

export const useThemeSwitch = () => {
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  return {
    isDark,
    toggleDark
  }
}

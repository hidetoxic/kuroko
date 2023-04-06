/** 增加省略号 */
export const toOmission = (str = '', length = 99999) => {
  return str
    .substring(0, length)
    .concat('...')
}

/** string数据过滤器 */
export const dataFilter = (data:any) => {
  const newObj:any = {}
  for (const key in data) {
    // 如果对象属性的值不为空，就保存该属性（如果属性的值为0 false，保存该属性。如果属性的值全部是空格，属于为空。）
    if ((data[key] === 0 || data[key] === false || data[key]) && data[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
      newObj[key] = data[key]
    }
  }
  return newObj
}

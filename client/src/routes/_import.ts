export default (importPath: string, ext = '.vue') => () => {
  const pages = import.meta.glob('@/pages/**/*')
  const pagesNames = Object.keys(pages)
  const importName = pagesNames.find((name) => name.includes(`${importPath}${ext}`)) || ''

  console.log('importPath', importPath)

  return pages[importName]()
}

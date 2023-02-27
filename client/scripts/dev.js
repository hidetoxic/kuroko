const { execSync } = require('child_process')

const shellOptions = {
  stdio: 'inherit',
  shell: process.platform === 'win32'
}
execSync('git config core.ignorecase false')
execSync('vite --config ../build/vite.dev.config.ts', shellOptions)
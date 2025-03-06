import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'
import amber from '@park-ui/panda-preset/colors/amber'
import brand from '@park-ui/panda-preset/colors/brand'
import neutrallight from '@park-ui/panda-preset/colors/neutrallight'
import sand from '@park-ui/panda-preset/colors/sand'

export default defineConfig({
  preflight: true,
  presets: [createPreset({ accentColor: brand, neutrallightColor: neutrallight, radius: 'sm' })],
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  jsxFramework: 'react', // or solid or vue
  outdir: 'styled-system',
})

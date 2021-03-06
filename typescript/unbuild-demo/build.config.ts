import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: 'src/',
      format: 'esm',
    },
  ],
  hooks: {
    'build:before': async (build) => {
      console.log(build)
    },
  },
  // Generates .d.ts declaration file
  declaration: true,
})

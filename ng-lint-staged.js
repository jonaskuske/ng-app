const { exec } = require('child_process')
const cwd = process.cwd()

const files = process.argv
  .slice(3)
  // ng lint's --files argument only works with relative paths
  // strip cwd and leading path delimiter
  .map(file => `--files="${file.replace(cwd, '').slice(1)}"`)
  .join(' ')

exec(
  `npm run lint -- --tsConfig=tsconfig.json --fix true ${files}`,
  (error, stdout) => error && (console.log(error), console.log(stdout), process.exit(1)),
)

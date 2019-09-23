
const path = require('path')
// const cypress = require('cypress')
const execa = require('execa')
const waitOn = require('wait-on')
const chalk = require('chalk')
const fs = require('fs-extra')

/**
 * Projects in the ../examples directory as test fixtures.
 *
 * Test specified project: `yarn test [...projectName]`.
 * examples: `yarn test fallback-sap redirect`.
 *
 * Test all project: `yarn test`.
 */

async function runTest () {
  const projPath = path.resolve(__dirname, '../')
  const opts = {
    cwd: projPath,
    stdio: 'inherit'
  }

  try {
    const npmCommand = process.argv[2] || 'dev'
    const installed = await fs.pathExists(path.resolve(projPath, './node_modules'))
    if (!installed) await execa('yarn', ['install'], opts)
    const subprocess = execa('npm', ['run', npmCommand], opts)

    await waitOn({
      resources: ['http://0.0.0.0:4000']
    })

    console.log(chalk.green(`Start Example project.`))

    await execa('npm', ['run', 'cypress'], opts)

    subprocess.kill()
  } catch (err) {
    console.log(chalk.red('Running test failed:'))
    console.error(err)
  }
}

runTest()

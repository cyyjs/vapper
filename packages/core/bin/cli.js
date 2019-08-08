#!/usr/bin/env node

const Vapper = require('../lib')
const cli = Vapper.cli

const pluginApi = new Vapper.PluginApi()

const config = pluginApi.loadConfig()
if (config && config.plugins) {
  ;(config.plugins || [])
    .forEach(plugin => {
      if (typeof plugin.CLI === 'function') {
        plugin.CLI(Vapper)
      } else if (Array.isArray(plugin)) {
        plugin[0].CLI(Vapper, plugin[0])
      }
    })
}

cli
  .command('build', 'Build the project for the production environment')
  .allowUnknownOptions()
  .action(async flags => {
    delete flags['--']
    const vapper = new Vapper({ ...(flags || {}), mode: 'production' })
    vapper.build()
  })

cli
  .command('dev', 'Start the development server')
  .allowUnknownOptions()
  .option('-p, --port <port>', 'Specify the port number')
  .option('-h, --host <host>', 'Specify the host')
  .action(async flags => {
    delete flags['--']
    const vapper = new Vapper({ ...(flags || {}), mode: 'development' })
    vapper.startServer()
  })

cli
  .command('start', 'Start the production server')
  .allowUnknownOptions()
  .option('-p, --port <port>', 'Specify the port number')
  .option('-h, --host <host>', 'Specify the host')
  .action(async flags => {
    delete flags['--']
    const vapper = new Vapper({ ...(flags || {}), mode: 'production' })
    vapper.startServer()
  })

cli.help()
cli.version(require('../package.json').version)

cli.parse()

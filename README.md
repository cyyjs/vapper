# vapper (WIP)

<p align="center"><a href="https://vapperjs.org/" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vapperjs.org/vapper.png" alt="Vapper logo"></a></p>

<p align="center">Work is still in progress, please use with caution</p>

<p align="center">
  <a href="https://lerna.js.org/"><img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg"></a>
  <a href="https://www.npmjs.com/package/@vapper/core"><img src="https://img.shields.io/npm/v/@vapper/core.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@vapper/core"><img src="https://img.shields.io/npm/l/@vapper/core.svg" alt="License"></a>
  <a href="https://www.patreon.com/HcySunYang"><img src="https://badgen.net/badge/support%20me/donate/ff00ff" alt="Support me"/></a>
</p>

<p align="center"><a href="https://vapperjs.org/">Documentation</a></p>

## Setup Project

```sh
git clone https://github.com/vapperjs/vapper.git
cd vapper
yarn install
```

## Run unit test

```sh
yarn test:unit
```

## Run E2E test

### 1. link

```sh
cd packages/core
yarn link
```

This makes the `vapper` command globally available.

### 2. run

Projects in the `examples` directory as test fixtures.

Test specified project:

```sh
yarn test:e2e [...projectName]
# E.g
yarn test:e2e poi vue-cli3
```

Test all project:

```sh
yarn test:e2e
```

## Author

**Vapper** © [HcySunYang](https://github.com/HcySunYang), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by HcySunYang.

> [homepage](http://hcysun.me/homepage/) · GitHub [@HcySunYang](https://github.com/HcySunYang) · Twitter [@HcySunYang](https://twitter.com/HcySunYang)
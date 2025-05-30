# eslint-config-riot

[![Build Status][ci-image]][ci-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

Riot default eslint config file

## Installation

Peer dependencies installation

```shell
npm i -D eslint@9 eslint-plugin-fp@2 eslint-config-prettier@10 prettier@3
```

Config installation

```shell
npm i -D eslint-config-riot
```

## Usage

Extend your `eslint.config.js` file as follow:

```js
import riotEslintConfig from 'eslint-config-riot'

export default defineConfig([{ extends: [riotEslintConfig] }])
```

[ci-image]: https://img.shields.io/github/actions/workflow/status/riot/eslint-config/test.yml?style=flat-square
[ci-url]: https://github.com/riot/eslint-config/actions
[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]: LICENSE.txt
[npm-version-image]: http://img.shields.io/npm/v/eslint-config-riot.svg?style=flat-square
[npm-downloads-image]: http://img.shields.io/npm/dm/eslint-config-riot.svg?style=flat-square
[npm-url]: https://npmjs.org/package/eslint-config-riot

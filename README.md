[![Version](https://img.shields.io/github/package-json/v/anwarhahjjeffersongeorge/camelcut/master.svg)](https://github.com/anwarhahjjeffersongeorge/camelcut)[![Build Status](https://travis-ci.org/anwarhahjjeffersongeorge/camelcut.svg?branch=master)](https://travis-ci.org/anwarhahjjeffersongeorge/camelcut) [![codecov](https://codecov.io/gh/anwarhahjjeffersongeorge/camelcut/branch/master/graph/badge.svg)](https://codecov.io/gh/anwarhahjjeffersongeorge/camelcut)
------------

[![license](https://img.shields.io/github/license/anwarhahjjeffersongeorge/camelcut.svg)](UNLICENSE) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-xo-blue.svg)](https://github.com/xojs/xo)

--------------

# &mdash; `camelcut` &mdash;
### [Documentation](https://anwarhahjjeffersongeorge.github.io/camelcut/)

### Cuts camel-cased strings somewhat shorter.  

Take a camel case string and make a straight abbreviation.  


------
## Installation

Run `npm install camelcut`

## Usage
#### Import:
  `import camelcut from 'camelcut'`
#### Require:
  `const camelcut = require('camelcut')`

#### Parameters
This module exports a single function with the ordered parameters  

Argument     | Type           | Required | Description  
------------ | ---------------| -------- | -----------  
`str`        | `string`       | Yes      | The source string  
`target`     | `number` = 7   | No       | The target output length  
`camels`     | `number` = 3   | No       | The number of camel-case substrings to include in the output.  

#### Returns
Returns null if the parameters are not of the required types.  
Returns empty string `''` if `str` is empty string.    

#### Examples
```
camelcut('SomeTextWrittenTogether', 7, 3) // 'SomTexW'  
camelcut('SomeTextWrittenTogether', 7, 4) // 'SoTeWrT'  
camelcut('Bright Ditch, Show Bulb Shining Loudly', 12, 6) // 'BrDiShBuShLo'  
camelcut('Bright Ditch?Show Bulb0Shining /Loudly', 12, 6) // 'BrDiShBuShLo'  
```

## Testing
npm test

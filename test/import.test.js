'use strict'
import test from 'ava'
import camelcut from '..'

test('Module exports function', t => {
  t.is(typeof camelcut, 'function', 'is function')
  // t.is(typeof camelcut, 'something', 'is a something type')
})

function targetT(t, arr) {
  for (const [str, target, camels, expected] of arr) {
    const r = camelcut(str, target, camels)
    // t.log(r)
    t.is(r, expected, `camelcase(str=${r}, target=${target}, camels=${camels}) must be ${expected}` )
  }
}

test(
  'Function can cut to target size and number of camels',
  targetT,
  [
    [ 'SomeTextWrittenTogether', 7, 3, 'SomTexW' ],
    [ 'SomeTextWrittenTogether', 7, 4, 'SoTeWrT' ],
    [ 'Bad Stuff Dff', 7, 2, 'BadStuf'],
    [ 'BadStuffff', 7, 2, 'BadStuf'],
    [ 'Bright Bulb Shining Loudly', 12, 4, 'BriBulShiLou'],
    [ 'Bright Ditch, Show Bulb Shining Loudly', 12, 6, 'BrDiShBuShLo'],
    [ 'Bright Ditch?Show Bulb0Shining /Loudly', 12, 6, 'BrDiShBuShLo'],
    [ 'thingsWillBecomeAlright', 12, 4, 'thiWilBecAlr']
  ]
)

test(
  'Function returns null for bad input',
  targetT,
  [
    [ 'SomeTextWrittenTogether', 7, '3', null],
    [ [], 7, 4, null],
    [ 'Bad Stuff Dff', Object, 2, null],
    [ undefined, 7, 2, null]
  ]
)
test(
  'Function returns empty string for empty string',
  targetT,
  [
    ['', 3, 3, '']
  ]
)

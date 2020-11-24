const convert = require('./convert.js')

test('convert 4 to 4', () => {
  expect(convert.convert(4, 4)).toBe(16)
})
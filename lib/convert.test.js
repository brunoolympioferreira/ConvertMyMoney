const { TestWatcher } = require('jest')
const convert = require('./convert')

test('convert cotacao 4 and quantidade 4', () => {
    expect(convert.convert(4,4)).toBe(16)
})

test('toMoney converts float', () => {
    expect(convert.toMoney(2)).toBe('2.00')
})
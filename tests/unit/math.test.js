// currency.test.js - Afghan Afghani (AFN) currency tests
import { convertToAFN, convertFromAFN, formatAFN } from '../../src/utils/math'

test('converts USD to AFN', () => {
  expect(convertToAFN(1)).toBe(73)
  expect(convertToAFN(10)).toBe(730)
  expect(convertToAFN(100)).toBe(7300)
})

test('converts AFN to USD', () => {
  expect(convertFromAFN(73)).toBe(1)
  expect(convertFromAFN(730)).toBe(10)
  expect(convertFromAFN(7300)).toBe(100)
})

test('formats AFN with proper symbol', () => {
  expect(formatAFN(73)).toBe('73 AFN')
  expect(formatAFN(1000)).toBe('1,000 AFN')
  expect(formatAFN(50000)).toBe('50,000 AFN')
})

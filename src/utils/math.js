// currency.js - Afghan Afghani (AFN) currency utilities
export function convertToAFN(usdAmount) {
  // Current approximate rate: 1 USD = 73 AFN
  return usdAmount * 73
}

export function convertFromAFN(afnAmount) {
  // Current approximate rate: 73 AFN = 1 USD
  return afnAmount / 73
}

export function formatAFN(amount) {
  // Format with proper AFN currency symbol
  return `${amount.toLocaleString()} AFN`
}

// Currency conversion utilities for Afghan Afghani (AFN)
// Exchange rate: 1 USD = 73 AFN

export function convertToAFN(usdAmount) {
  return usdAmount * 73
}

export function convertFromAFN(afnAmount) {
  return afnAmount / 73
}

export function formatAFN(amount) {
  return `${amount.toLocaleString()} AFN`
}

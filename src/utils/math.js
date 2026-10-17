export function add(a, b) {
  // if (typeof a !== "number" || typeof b !== "number") {
  //   throw new Error("Both values must be numbers");
  // }

  return a + b;
}

// What if anotheer developer accidentally changes the function above to do the  following?
// export function add(a, b) {
//   return Math.abs(a) + Math.abs(b);
// }

export function isEven(n) {
  return n % 2 === 0;
}

export function calculateBreadCost(numberOfBreads, priceOfOneBread) {
  // Check if the numbers are negative.
  if (numberOfBreads < 0 || priceOfOneBread < 0) {
    return "Numbers cannot be negative.";
  }

  // Return the total price.
  return numberOfBreads * priceOfOneBread;
}

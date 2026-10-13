import { render, screen } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import ChaiCounter from '../../src/components/Counter'

test('increments chai order count when Add Chai is clicked', () => {
  // Arrange: put it on the screen
  const onPlaceOrder = vi.fn()
  render(<ChaiCounter onPlaceOrder={onPlaceOrder} />)
  
  // Act: do what the user does
  fireEvent.click(screen.getByText('Add Chai'))
  
  // Assert: check what the user sees
  expect(screen.getByText('🫖 Orders: 1')).toBeDefined()
})

test('calls onPlaceOrder when Place Order is clicked', () => {
  // Arrange: put it on the screen with some orders
  const onPlaceOrder = vi.fn()
  render(<ChaiCounter onPlaceOrder={onPlaceOrder} />)
  
  // Act: add chai then place order
  fireEvent.click(screen.getByText('Add Chai'))
  fireEvent.click(screen.getByText('Place Order'))
  
  // Assert: callback was called with order count
  expect(onPlaceOrder).toHaveBeenCalledWith(1)
})

test('Place Order button is disabled when count is 0', () => {
  // Arrange: put it on the screen
  render(<ChaiCounter onPlaceOrder={vi.fn()} />)
  
  // Assert: Place Order button should be disabled
  const placeOrderButton = screen.getByText('Place Order')
  expect(placeOrderButton.disabled).toBe(true)
})

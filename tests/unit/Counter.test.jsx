import { render, screen } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import ChaiCounter from '../../src/components/Counter'

test('counts chai orders when clicked', () => {
  // Arrange: put it on the screen
  render(<ChaiCounter />)
  
  // Act: do what the user does
  fireEvent.click(screen.getByRole('button'))
  
  // Assert: check what the user sees
  expect(screen.getByText('🫖 Chai Orders: 1')).toBeDefined()
})

import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import ChaiOrderApp from '../../src/components/ChaiOrderApp'

const server = setupServer(
  http.get('/api/user', () => HttpResponse.json({ name: 'Zahra' }))
)

beforeAll(() => server.listen())
afterAll(() => server.close())

test('complete chai ordering flow: add chai and place order', async () => {
  // Arrange: render the full app
  render(<ChaiOrderApp />)
  
  // Act: user adds chai
  fireEvent.click(screen.getByText('Add Chai'))
  fireEvent.click(screen.getByText('Add Chai'))
  
  // Assert: order count should be 2
  expect(screen.getByText('🫖 Orders: 2')).toBeDefined()
  
  // Act: user places order
  fireEvent.click(screen.getByText('Place Order'))
  
  // Assert: confirmation message appears
  expect(await screen.findByText('Salam, Zahra! Your 2 chai order has been received.')).toBeDefined()
})

import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import AfghanGreeting from '../../src/components/Greeting'

const server = setupServer(
  http.get('/api/user', () => HttpResponse.json({ name: 'Zahra' }))
)

beforeAll(() => server.listen())
afterAll(() => server.close())

test('greets the user by name', async () => {
  render(<AfghanGreeting />)
  expect(await screen.findByText('Salam, Zahra! Welcome!')).toBeDefined()
})

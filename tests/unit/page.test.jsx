import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../../src/pages'

test('Home displays the Chai Time app', () => {
  render(<Home />)

  expect(
    screen.getByRole('heading', {
      level: 1,
      name: 'Chai Time',
    })
  ).toBeDefined()
})
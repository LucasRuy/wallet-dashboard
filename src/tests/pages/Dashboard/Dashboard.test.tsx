import { render, screen } from '@testing-library/react'

import Dashboard from '../../../pages/Dashboard'

describe('<Dashboard />', () => {
  test('Should be render "Dashboard Screen" phrase', () => {
    render(<Dashboard />)
  
    const linkElement = screen.getByText(/Dashboard Screen/i)
  
    expect(linkElement).toBeInTheDocument()
  })
})

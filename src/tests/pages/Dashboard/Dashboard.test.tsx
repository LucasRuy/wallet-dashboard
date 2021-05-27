import { render, queryByTestId } from '@testing-library/react'

import Dashboard from '../../../pages/Dashboard'

describe('<Dashboard />', () => {
  test('Should be render "Dashboard Screen" phrase', () => {
    render(<Dashboard />)

    const dashboard = queryByTestId(document.documentElement, 'dashboard')
    expect(dashboard).toBeInTheDocument()
  })
})

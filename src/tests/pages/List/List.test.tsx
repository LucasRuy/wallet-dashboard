import { render, screen } from '@testing-library/react'

import List from '../../../pages/List'

describe('<List />', () => {
  test('Should be render "List Screen" phrase', () => {
    render(<List />)
  
    const linkElement = screen.getByText(/List Screen/i)
  
    expect(linkElement).toBeInTheDocument()
  })
})

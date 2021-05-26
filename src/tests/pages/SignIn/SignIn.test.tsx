import { render, screen } from '@testing-library/react'

import SignIn from '../../../pages/SignIn'

describe('<SignIn />', () => {
  test('Should be render "SignIn Screen" phrase', () => {
    render(<SignIn />)
  
    const linkElement = screen.getByText(/SignIn Screen/i)
  
    expect(linkElement).toBeInTheDocument()
  })
})

import { render, queryByTestId } from '@testing-library/react'

import SignIn from '../../../pages/SignIn'

describe('<SignIn />', () => {
  test('Should be render "SignIn Screen" phrase', () => {
    render(<SignIn />)

    const dashboard = queryByTestId(document.documentElement, 'sign-in')
    expect(dashboard).toBeInTheDocument()
  })
})

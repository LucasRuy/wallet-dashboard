import { render, queryByTestId } from '@testing-library/react'

import List from '../../../pages/List'

describe('<List />', () => {
  test('Should be render "List Screen" phrase', () => {
    render(<List />)

    const dashboard = queryByTestId(document.documentElement, 'list')
    expect(dashboard).toBeInTheDocument()
  })
})

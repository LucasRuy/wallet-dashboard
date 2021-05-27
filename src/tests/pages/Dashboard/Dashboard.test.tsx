import { render, queryByTestId } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import darkTheme from '../../../styles/themes/dark'

import Dashboard from '../../../pages/Dashboard'

describe('<Dashboard />', () => {
  test('Should be render "Dashboard Screen" phrase', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Dashboard />
      </ThemeProvider>
    )

    const dashboard = queryByTestId(document.documentElement, 'dashboard')
    expect(dashboard).toBeInTheDocument()
  })
})

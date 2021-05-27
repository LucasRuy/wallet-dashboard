import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/GlobalStyles'
import darkTheme from './styles/themes/dark'

import Dashboard from './pages/Dashboard'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  )
}

export default App

import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/GlobalStyles'
import darkTheme from './styles/themes/dark'

import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  )
}

export default App

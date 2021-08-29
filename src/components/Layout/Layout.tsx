import React from 'react'

import * as s from './styles'

import Aside from '../Aside'
import Content from '../Content'
import MainHeader from '../MainHeader'

const Layout: React.FC = ({ children }) => {
  return (
    <s.Grid>
      <MainHeader />
      <Aside />
      <Content>
        {children}
      </Content>
    </s.Grid>
  )
}

export default Layout

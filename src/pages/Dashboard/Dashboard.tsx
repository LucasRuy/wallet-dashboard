import React from 'react'

import ContentHeader from '../../components/ContentHeader'

import * as s from './styles'

const Dashboard: React.FC = () => {
  return (
    <div data-testid="dashboard">
      <s.Container>
        <ContentHeader />
      </s.Container>
    </div>
  )
}

export default Dashboard

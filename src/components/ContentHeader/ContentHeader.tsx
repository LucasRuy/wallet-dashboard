import React from 'react'

import * as s from './styles'

const ContentHeader: React.FC = () => {
  return (
    <s.Container>
      <s.TitleWrapper>
        <h3>Title</h3>
      </s.TitleWrapper>
      <s.FiltersWrapper>
        <button type="button">Date</button>
        <button type="button">Order</button>
      </s.FiltersWrapper>
    </s.Container>
  )
}

export default ContentHeader

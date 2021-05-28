import React, { useMemo } from 'react'

import * as s from './styles'

import emojis from '../../utils/emojis'

const MainHeader: React.FC = () => {
  const getEmoji = useMemo(() => {
    return emojis[Math.floor(Math.random() * emojis.length)];
  }, [])

  return (
    <s.Container>
      <p>Toogle</p>
      <s.Profile>
        <h3>Hello, {getEmoji}</h3>
        <span>User Name</span>
      </s.Profile>
    </s.Container>
  )
}

export default MainHeader

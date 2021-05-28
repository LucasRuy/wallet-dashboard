import React, { useMemo } from 'react'

import * as s from './styles'

import emojis from '../../utils/emojis'

import Toogle from '../Toogle'

const MainHeader: React.FC = () => {
  const getEmoji = useMemo(() => {
    return emojis[Math.floor(Math.random() * emojis.length)];
  }, [])

  return (
    <s.Container>
      <Toogle />
      <s.Profile>
        <h3>Hello, {getEmoji}</h3>
        <span>User Name</span>
      </s.Profile>
    </s.Container>
  )
}

export default MainHeader

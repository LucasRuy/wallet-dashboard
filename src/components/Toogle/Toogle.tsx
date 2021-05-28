import React from 'react'

import * as s from './styles'

const Toogle: React.FC = () => {
  const switchProps = {
    checked: true,
    checkedIcon: false,
    uncheckedIcon: false,
    onChange: () => {},
  }

  return (
    <s.Container>
      <s.ToogleLabel>Light</s.ToogleLabel>
      <s.ToogleSelector {...switchProps}/>
      <s.ToogleLabel>Dark</s.ToogleLabel>
    </s.Container>
  )
}

export default Toogle

import styled from 'styled-components'
import Switch, { ReactSwitchProps } from 'react-switch'

export const Container = styled.div(
  ({ theme }) => `
    grid-area: AS;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
  `
)

export const ToogleLabel = styled.span(
  ({ theme }) => `
    color: ${theme.colors.white}
  `
)

export const ToogleSelector = styled(Switch)
  .attrs<ReactSwitchProps>(
    ({ theme }) => ({
      onColor: theme.colors.success,
      offColor: theme.colors.warning
    })
  )<ReactSwitchProps>`
    margin: 10px;
  `

import styled from 'styled-components'

export const Container = styled.div(
  ({ theme }) => `
    grid-area: CT;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `
)

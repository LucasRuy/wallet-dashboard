import styled from 'styled-components'

export const Container = styled.div(
  ({ theme }) => `
    grid-area: MH;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  `
)

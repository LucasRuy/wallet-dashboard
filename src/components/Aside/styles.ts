import styled from 'styled-components'

export const Container = styled.div(
  ({ theme }) => `
    grid-area: AS;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  `
)

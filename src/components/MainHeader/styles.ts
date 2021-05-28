import styled from 'styled-components'

export const Container = styled.div(
  ({ theme }) => `
    grid-area: MH;
    background-color: ${theme.colors.secondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    border-bottom: 1px solid ${theme.colors.gray};
  `
)

export const Profile = styled.div(
  ({ theme }) => `
    color: ${theme.colors.white}
  `
)

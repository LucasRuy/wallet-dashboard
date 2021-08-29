import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const TitleWrapper = styled.div`
  > h3 {
    font-size: 32px;
    color: ${props => props.theme.colors.white};

    &::after {
      content: '';
      display: block;
      width: 55px;
      border-bottom: 10px solid ${props => props.theme.colors.warning};
    }
  }
`

export const FiltersWrapper = styled.div`
  display: flex;
`

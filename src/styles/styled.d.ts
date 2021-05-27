import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      primary: string,
      secondary: string,
      tertiary: string,
      gray: string,
      white: string,
      black: string,
      success: string,
      warning: string,
      error: string,
      info: string
    }
  }
}

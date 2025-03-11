import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    body {
        background-color: ${({ theme }) => theme.colors['gray-600']};
        -webkit-font-smoothing: antialiased;
        color: ${({ theme }) => theme.colors['gray-300']}
    }

    body, input, textarea, button {
        font: 400 1rem 'Inter', sans-serif;
        line-height: 140%;
    }
    button {
  cursor: pointer;
}
`

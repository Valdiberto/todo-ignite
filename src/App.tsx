import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { TaskProvider } from './contexts/TaskContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TaskProvider>
        <Header />
        <Tasks />
      </TaskProvider>
    </ThemeProvider>
  )
}

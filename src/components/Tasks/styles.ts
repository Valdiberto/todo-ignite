import styled from 'styled-components'

export const TasksContainer = styled.section`
  width: 100%;
  max-width: 46rem;
  margin: 0 auto;
  margin-top: 5.625rem;
  padding: 0 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      gap: 0.5rem;

      p {
        display: flex;
        align-items: center;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 100%;
        color: ${({ theme }) => theme.colors['brand-blue']};
      }
      span {
        display: flex;
        justify-content: center;

        min-width: 1.9rem;
        font-size: 0.75rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors['gray-200']};
        background-color: ${({ theme }) => theme.colors['gray-400']};
        padding: 0.125rem 0.5rem;
        border-radius: 999px;
      }
    }
    div:last-child {
      p {
        color: ${({ theme }) => theme.colors['brand-purple']};
      }
    }
  }
`
export const EmptyTaskContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0;
  justify-content: center;
  margin-top: 1.25rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top: 1px solid #333333;

  svg {
    margin-bottom: 1rem;
    opacity: 0.3;
  }
  p {
    font-weight: 700;
  }
  span {
  }
`

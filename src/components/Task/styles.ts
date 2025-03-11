import { styled } from 'styled-components'

export const TaskContentContainer = styled.section`
  display: flex;
  align-items: flex-start;
  width: 100%;
  background: ${({ theme }) => theme.colors['gray-500']};
  border: 1px solid ${({ theme }) => theme.colors['gray-400']};
  padding: 1rem;
  border-radius: 8px;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  margin-top: 1rem;

  p {
    flex: 1;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['gray-100']};
  }

  svg:first-child {
    color: ${({ theme }) => theme.colors['purple-dark']};

    &:hover {
      color: ${({ theme }) => theme.colors['brand-purple']};
    }
  }
`

export const StrikedSpan = styled.span`
  flex: 1;
  text-decoration: line-through;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors['gray-300']};
`

export const ButtonCheckBox = styled.button`
  width: 1.20625rem;
  height: 1.120625rem;
  background: none;
  margin-bottom: 1rem;
  border-radius: 999px;
  border: 2px solid ${({ theme }) => theme.colors['brand-blue']};

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors['blue-dark']};
    background-color: ${({ theme }) => theme.colors['blue-dark']}33;
  }
`
export const ButtonDelete = styled.button`
  background: ${({ theme }) => theme.colors['gray-500']};
  border: none;

  svg:first-child {
    color: ${({ theme }) => theme.colors['gray-300']};
    padding: 0.3125rem;
    &:hover {
      color: ${({ theme }) => theme.colors['brand-danger']};
      background-color: ${({ theme }) => theme.colors['gray-400']};
      border-radius: 4px;
    }
  }
`

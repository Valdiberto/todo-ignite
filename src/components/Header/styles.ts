import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 12.5rem;
  background: ${({ theme }) => theme.colors['gray-700']};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const FormContainer = styled.form`
  position: absolute;
  height: 3.375rem;
  bottom: calc(-3.375rem / 2);
  width: 100%;
  max-width: 46rem;
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;

  input {
    height: 100%;
    flex: 1;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors['gray-500']};
    color: ${({ theme }) => theme.colors['gray-100']};
    border: 1px solid ${({ theme }) => theme.colors['gray-700']};
    padding: 0 1rem;
  }
  input:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors['brand-purple']};
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors['gray-300']};
  }
`

export const ButtonContainer = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  border: none;
  background: ${({ theme }) => theme.colors['blue-dark']};
  color: ${({ theme }) => theme.colors['gray-100']};
  border-radius: 8px;
  padding: 0 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  gap: 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors['brand-blue']};
    cursor: pointer;
  }
`

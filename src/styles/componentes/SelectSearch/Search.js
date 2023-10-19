'use client'
import styled from "styled-components";

export const Search = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 1.5rem;
  color: ${props => props.theme.gray.tertiary};
  padding: 0.4rem;
  background: ${props => props.theme.gray.primary};
  outline: none;
  border: 1px solid ${props => props.theme.gray.secondary};
  border-radius: 0.4rem 0.4rem 0.4rem 0.4rem;
  box-shadow: 0.3px 0.3px 1px ${props => props.theme.gray.secondary};

  &::placeholder {
    color: ${props => `${props.theme.gray.tertiary}98`};
    font-size: 1.2rem;
  }
`
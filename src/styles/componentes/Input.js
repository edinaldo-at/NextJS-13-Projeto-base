'use client'
import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 3rem;

  display:  ${props => props.display};

  font-size: 1.5rem;
  color: ${props => props.theme.gray.tertiary};
  
  padding: 0.8rem;
  background: ${props => props.theme.gray.primary};
  outline: none;
  border: 1px solid ${props => props.theme.gray.secondary};
  border-radius: 0.4rem 0.4rem 0.4rem 0.4rem;
  box-shadow: 0.3px 0.3px 1px ${props => props.theme.gray.secondary};
  &:focus~label,
  &:valid~label {
    top:-1px;
    font-size: 0.8rem;
    background-color: ${props => props.theme.gray.primary};
  }
`
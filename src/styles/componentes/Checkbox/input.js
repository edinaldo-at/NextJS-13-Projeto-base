'use client'

import styled from "styled-components";

export const Input = styled.input`
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  background-color: ${props => props.theme.gray.primary};
  /* Not removed via appearance */
  margin: 0;

  font: inherit;
  color: ${props => props.theme.gray.tertiary};
  width: ${props => `${props.size ? props.size : 1.8}rem`};
  height:  ${props => `${props.size ? props.size : 1.8}rem`};
  border: 1px solid ${props => props.theme.gray.secondary};
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  padding: 0.4rem;

  &::before {
      content: "";
      width: ${props => `${props.size ? props.size-0.8 : 1}rem`};
      height:  ${props => `${props.size ? props.size-0.8 : 1}rem`};
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      transform: scale(0);
      transform-origin: bottom left;
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em ${props => props.theme.gray.primary};
      /* Windows High Contrast Mode */
      background-color: ${props => props.theme.gray.secondary};      
    }

  &:checked {
    background-color: ${props => props.color};
    border: none;
  }
  
  &:checked::before {
    transform: scale(1);
    background-color: ${props => props.theme.blue.primary};
  }
`
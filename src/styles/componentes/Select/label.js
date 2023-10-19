'use client'
import styled from "styled-components";

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);

  font-size: 1.2rem;
  color: ${props => props.theme.gray.tertiary};
  padding: 0 6px;
  pointer-events: none;
  transition: 0.5s;
`
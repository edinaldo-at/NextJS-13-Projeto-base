'use client'
import styled from "styled-components";

export const Span = styled.span`
  width: 4.4rem;
  height: 2.2rem;
  background: ${props => props.theme.gray.secondary};
  border-radius: 2rem;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`
'use client'

import styled from "styled-components";

export const Input = styled.input`
  opacity: 0;
  position: absolute;
  
  
  &~span {
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 0.6rem;
    color: ${props => props.theme.gray.primary};

    &:after {
      content: "No";
    }
  }

  &:checked~span {
    background: ${props => props.color};
    justify-content: start;
    align-items: center;
    padding-left: 0.4rem;
    color: ${props => props.theme.gray.primary};

    &:before {
      transform: translate(33.5px, -50%);
    }
    &:after {
      content: "Yes";
    }
  }

  
`
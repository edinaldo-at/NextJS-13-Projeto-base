'use client'
import styled from "styled-components";

export const Options = styled.div`
  display: ${props => props.display === "true" ?"flex":"none"};
  flex-direction: column;
  position: relative;
  top: -1rem;

  width: 100%;
  padding: 0.4rem;
  background-color: ${props => `${props.theme.gray.secondary}98`};
  border-radius: 0.4rem 0.4rem 0.4rem 0.4rem;
  input{
    margin-bottom: 0.4rem;
    background-color: ${props => `${props.theme.gray.primary}98`};
  }

  div {
    margin-bottom: 0.4rem;
    padding: 0.4rem;

    cursor: pointer;

    &:hover{
      background-color: ${props => `${props.theme.gray.primary}50`};
      border-radius: 0.4rem 0.4rem 0.4rem 0.4rem;
    }
  }

  .selected {
    background-color: ${props => `${props.theme.gray.tertiary}98`};
  }
  
`
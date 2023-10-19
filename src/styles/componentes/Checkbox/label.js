'use client'
import styled from "styled-components";

export const Label = styled.label`
  font-family: system-ui, sans-serif;
  width: ${props => `${props.size ? props.size : 1.8}rem`};
  height: ${props => `${props.size ? props.size : 1.8}rem`};
  font-weight: bold;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  
`
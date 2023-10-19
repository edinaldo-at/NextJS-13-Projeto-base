'use client'
import styled from "styled-components";

export const Icon = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);

  font-size: 1.2rem;
  color: ${props => props.theme.gray.tertiary};
  transition: 0.5s;
  cursor: pointer;
`
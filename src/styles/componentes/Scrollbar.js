'use client'

import styled from "styled-components";
export const Scrollbar = styled.div`
  width: 100%;
  height: 70vh;
  overflow: auto;
  padding: 0.8rem;
  border: 1px solid;

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #222222;
  
  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar, ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track, ::-webkit-scrollbar-track {
    background: #666666;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb {
    background-color: #999999;
    border-radius: 10px;
    border: 3px solid;
  }

  &::-webkit-scrollbar-thumb:hover {
  background-color: #333333;
  }
`
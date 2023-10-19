'use client'

import { InSelect } from "./Select";
import { Box } from "./box";
import { Label } from "./label";
import { Span } from "./span";

export const Select = ({name, label, error, data=[]}) => {  
  return (
    <Box>
      <InSelect name={name} id={name}>
        <option key={0}value=""></option>
        {data.map((op) => {
          return <option key={op.id} value={op.id}>{op.name}</option>
        })}
      </InSelect>
      <Label htmlFor={name}>{label}</Label>
      {error && <Span>{error.toString()}</Span>}
    </Box>
  )
}
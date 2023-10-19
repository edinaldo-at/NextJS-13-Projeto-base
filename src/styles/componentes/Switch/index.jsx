'use client'
import { useState } from "react";
import { Box } from "./box";
import { Input } from "./input";
import { Label } from "./label";
import { Span } from "./span";

export const Switch = ({name, color}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => setChecked(e.target.checked)

  return (
    <Box>
      <Label htmlFor={name}>
        <Input 
          type="checkbox" 
          defaultChecked={checked && "checked"} 
          onChange={handleChange}
          name={name}
          id={name}
          color={color}
        />
        <Span />
      </Label>
    </Box>
  )
}
'use client'
import { useState } from "react";
import { Input } from "./input";
import { Label } from "./label";

export const Checkbox = ({size, color, name}) => {
  const [checked, setChecked] = useState(false);

  return (
    <Label htmlFor={name} size={size}>
      <Input 
        type="checkbox"
        name={name} 
        defaultChecked={checked && "checked"} 
        onClick={(e) => setChecked(!checked)}
        size={size}
        color={color}
      />
    </Label>
  )
}
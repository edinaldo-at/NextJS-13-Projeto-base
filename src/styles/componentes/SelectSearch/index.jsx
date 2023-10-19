'use client'
import { useMemo, useState } from "react";
import { Box } from "../Box";
import { FormGgroup } from "../FormGgroup";
import { Input } from "../Input";
import { Label } from "../Label";
import { Span } from "../span";
import { Icon } from "./Icon";
import { Options } from "./Options";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const SelectSearch = ({name, label, error, data=[]}) => {
  const [openOptions, setOpenOptions] = useState(false);
  const handleIcon = openOptions ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown/>
  const [selected, setSelected] = useState({id:'0',value:""});
  const [search, setSearchg] = useState("");
  const regexp = useMemo(() => new RegExp(search, "i"), [search]);

  const handleData = (
    data.filter((obj) =>{
      const res = regexp.test(obj.name) && obj;
      return res;
    })
  )

  const handleOptions = (
    handleData.map((op) => {
        const hoverSelected = op?.id == selected?.id ? selected : ""

        return <div key={op.id} id={op.id} title={op.name} className={hoverSelected} onClick={(e => {
          if (e.target.id == selected.id){
            setSelected({id: 0, value: ""})
          }else{
            setSelected({id: e.target.id, value: e.target.title})
          }
        })}>
          {op.name}
        </div>      
      })
  )
  
  const handleOnMouseDown = (e) => {
    e.preventDefault()
    setOpenOptions(false)
  }

  const hanldeChange = (e) => {
    setSearchg(e.target.value.toString())
    setOpenOptions(true)
    setSelected({id: e.target.id, value: e.target.value})
  }

  const hanldeClick = (e) => {
    setSelected({...selected ,value: e.target.value})
    setOpenOptions(true)
  }
  
  return (
    <Box onMouseLeave={(e) => handleOnMouseDown(e)}>
      <FormGgroup >
        <Icon 
          onClick={(e) => setOpenOptions(!openOptions)}
        >
          {handleIcon}
        </Icon>
        <Input 
          type="text"
          name={name}
          value={selected.value} 
          id={selected.id} 
          onClick={(e) => hanldeClick(e) } 
          onChange={(e) => hanldeChange(e)}
          display={"block"} required
        />
        <Label htmlFor={name} >{label}</Label>    
      </FormGgroup> 
      <Options display={openOptions.toString()} >
        {handleOptions}
      </Options>
      {error && <Span>{error.toString()}</Span>}
    </Box> 
  )
}
import { Button, Flex , FormControl , Input, input} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

 export const AddTodo = () => {
  const [value, setValue] = useState("")
  const handelSubmit=e=>{
    e.preventDefault()
    setValue("")
  }
const handelInput =e=>{
 
  setValue(e.target.value)
}
  return (
   <form onSubmit={handelSubmit}>
    <Flex>
      <FormControl>
        <Input type="text"  onChange={handelInput}
       borderTopRightRadius={0}
       borderBottomRightRadius={0} 
       value={value}/>
      </FormControl>
      <Button
      colorScheme={"teal"}
      type="submit"
      disabled={!value}
      borderTopLeftRadius={0}
      borderBottomLeftRadius={0}>ADD TODO</Button>
    </Flex>
   </form>
  )
}



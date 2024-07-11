

import { Input ,Button} from '@mui/material'
/**
 * 表单组件map
 * 1. input
 * 2. button
 * 3. select
 * 4. radio
 * 5. checkbox
 * 6. Date 
 * 7. switch
 * 
 * 8. TextField
 */
import React, { memo } from 'react'
interface BaseLoginProps {
  name:string
  password:string
  code?:string
}
const Form = memo<BaseLoginProps>((props) => {
  return (
    <div>
      <Input/>
      <Button variant="contained" >
        deng
      </Button>
    </div>
  )
})

export {FormWithHookForm } from "./rhf"

export default Form
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField, TextFieldProps } from '@mui/material';
import { UsePassinput } from './Usepassinput';
import { forwardRef, ForwardRefRenderFunction } from 'react';

 const Passinput:ForwardRefRenderFunction<HTMLDivElement,TextFieldProps> = (props,ref) => {
   const {
    show,
    setShow
   }=UsePassinput()
    return ( 
        <TextField  type={show?"text":"password"} ref={ref} {...props} InputProps={{
          
            endAdornment: <InputAdornment onClick={()=>{
                setShow(prev=>!prev)
            }}  position="start">{show?<Visibility/>:<VisibilityOff/>}</InputAdornment>,
          }}/>
     );
}

export const PassInputs=forwardRef(Passinput)

 

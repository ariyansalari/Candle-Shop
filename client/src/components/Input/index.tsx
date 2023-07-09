import { TextField, TextFieldProps } from "@mui/material";
import { forwardRef, ForwardRefRenderFunction } from "react";

const Inputs:ForwardRefRenderFunction<HTMLDivElement,TextFieldProps> = (props, ref) => {
    return (
        <TextField
            ref={ref}
         
           {...props}
        />
    );
};

export const TextInputs=forwardRef(Inputs)
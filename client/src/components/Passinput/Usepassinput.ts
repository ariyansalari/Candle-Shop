import { useState } from "react";

export const UsePassinput = () => {
    const [show, setShow] = useState(false);
    return {
        show,
        setShow
    };
}
 

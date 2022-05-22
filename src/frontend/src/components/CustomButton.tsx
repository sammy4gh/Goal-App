import {ReactElement, FC} from 'react';
import MenuIcon from '@mui/icons-material/Menu'
import { Typography, TypographyProps,IconButton, IconButtonProps, Button, ButtonProps } from '@mui/material';


type CustomButtonPropsType = {
    buttonProps : ButtonProps,
    icon : ReactElement,
    labelName: string
}


const CustomButton  = ({buttonProps, icon, labelName} : CustomButtonPropsType ): JSX.Element => {
const {size, color,sx,variant,  } = buttonProps
    return (
        <Button variant={variant}  color={'primary'} startIcon={icon}>
            {labelName}
        </Button>
        );
};

CustomButton.defaultProps  = {
    buttonProps : {
       size:"large",
       color:"inherit",
        variant : 'text',
       ariaLabel:"menu",
        type : '',
       sx: { mr: 2 },
   },
   icon : <></>,

    labelName : 'Icon Name'
}

export default CustomButton;

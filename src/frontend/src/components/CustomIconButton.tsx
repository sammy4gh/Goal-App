import {ReactElement, FC} from 'react';
import MenuIcon from '@mui/icons-material/Menu'
import { Typography, TypographyProps,IconButton, IconButtonProps, Button, ButtonProps } from '@mui/material';


type CustomIconButtonPropsType  = {
    iconButtonProps : ButtonProps,
    icon : ReactElement,
    labelName: string
}


const CustomIconButton  = ({iconButtonProps, icon, labelName} : CustomIconButtonPropsType ): JSX.Element => {
const {size, color,sx } = iconButtonProps
    return (
        <Button variant="text"  color={'secondary'} startIcon={icon}>
            {labelName}
        </Button>
        );
};

CustomIconButton.defaultProps  = {
    iconButtonProps : {
       size:"large",
       color:"inherit",
       ariaLabel:"menu",
       sx: { mr: 2 }
   },
   icon : <></>,

    labelName : 'Icon Name'
}

export default CustomIconButton;

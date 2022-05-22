import { FormControl,FormControlProps, Input, InputAdornment, InputLabel, InputProps } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import {ReactElement, FC} from 'react';

type FormInputType ={
    inputProps : InputProps,
    formControlProps : FormControlProps,
    value : any,
    onChange?: any,
    labelName? : string,
    icon? : ReactElement,

}

const  FormInput = ({inputProps, labelName, formControlProps,onChange, icon, value}: FormInputType) : JSX.Element => {
    const {name,type,id} =inputProps
    const handleChange = (e: any)=>{
        onChange(e)
    }
    return <FormControl fullWidth variant='standard'>
        <InputLabel htmlFor="name">{labelName}</InputLabel>
        <Input id={id}
               type={type}
               value={value}
               name={name}
               onChange={(e)=>handleChange(e)}
               endAdornment={
                   <InputAdornment position={"end"}>
                       {icon}
                   </InputAdornment>
               }
        />
    </FormControl>;
}

FormInput.defaultProps  = {
    formControlPrps : {
        variant : 'filled',
    },
    inputProps:{
        name : 'name',
        type: 'text',
        id : ''
    },
    value: '',

    icon : <></>,
    labelName : 'name',
    onChange: ()=>{}
}

export default FormInput

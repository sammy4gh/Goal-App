import {useState} from "react";
import Grid from '@mui/material/Grid' ;
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import Input from '@mui/material/Input';
import {FormControl, InputLabel } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import CustomButton from '../components/CustomButton'
import FormInput from '../components/FormInput'

type LoginPropsType = {}
type LoginFormDataType = {
    email: string,
    password: string,

}


const Login = (props: LoginPropsType) : JSX.Element => {
    const [formData, setFormData] = useState<LoginFormDataType>({

        email: '',
        password: '',

    });

    const { email, password} = formData

    const onChange = (e: any) => {
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    const onSubmit = ()=>{

    }
    return (
        <>
            <Grid

                spacing={8}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={8} style={{marginBottom:20}}>
                    <Stack direction='row'
                           spacing={2}
                           alignItems="center"
                           justifyContent="center">
                        <LoginIcon sx={{fontSize: 50}}/>
                        <Typography variant="h2" component="div" style={{fontWeight: 'bold'}}>
                           Login
                        </Typography>
                    </Stack>
                    <Typography variant="h4" component="div" style={{fontWeight: 'bold', color: 'grey'}}>
                       Login to set goals
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <form onSubmit={onSubmit} style={{width: 'full'}}>
                        <Stack spacing={2} style={{width: 'full'}}>
                            <FormInput formControlProps={{}} inputProps={{name:'email', type:'email'}} value={email} labelName={'email'} onChange={onChange}/>
                            <FormInput formControlProps={{}} inputProps={{name:'password',type:'password' }} value={password} labelName={'password'} onChange={onChange}/>
                            <CustomButton labelName={'Submit'} buttonProps={{variant: 'contained', type: 'submit'}}/>
                        </Stack>
                    </form>

                </Grid>
            </Grid>
        </>);
};


export default Login
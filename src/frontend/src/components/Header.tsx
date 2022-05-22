import {FC} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CustomButton from "./CustomButton"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom"


type HeaderProps = {}



const Header  = (props: HeaderProps): JSX.Element => {

    return (
        <AppBar  elevation={1} position="static" color={'secondary'}>
            <Toolbar>

                    <Typography variant="h5"  component="div" sx={{flexGrow: 1}}>
                        <Link to={'/'} style={{color: '#212121', fontWeight:'bold'}} >
                        Goalyn
                        </Link>
                    </Typography>


               <Stack direction="row" spacing={2}>
                   <Link to={'/login'} >
                       <CustomButton labelName={'Login'} icon={<LoginIcon/>}/>
                   </Link>
                   <Link to={'/register'}>
                       <CustomButton labelName={'Register'} icon={<PersonIcon/>}/>
                   </Link>
               </Stack>

            </Toolbar>
        </AppBar>
    );
};

export default Header;

import {FunctionComponent} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CustomIconButton from "./CustomIconButton"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom"


type HeaderProps = {}



const Header = (props: HeaderProps): JSX.Element => {

    return (
        <AppBar  elevation={1} position="static" color={'primary'}>
            <Toolbar>

                <Typography variant="h6" color={'secondary'} component="div" sx={{flexGrow: 1}}>
                    Goaler
                </Typography>
               <Stack direction="row" spacing={2}>
                   <Link to={'/login'} style={{ textDecoration: 'none' }}>
                       <CustomIconButton labelName={'Login'} icon={<LoginIcon/>}/>
                   </Link>
                   <Link to={'/register'}>
                       <CustomIconButton labelName={'Signup'} icon={<PersonIcon/>}/>
                   </Link>
               </Stack>

            </Toolbar>
        </AppBar>
    );
};

export default Header;

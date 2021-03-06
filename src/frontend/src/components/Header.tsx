import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CustomButton from "./CustomButton";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../state/app/hooks";
import { RootState } from "../state/app/store";
import { logout, reset } from "../state/features/auth/authSlice";

type HeaderProps = {};

const Header = (props: HeaderProps): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset);
    navigate("/");
    console.log("logout clicked");
  };

  return (
    <AppBar elevation={1} position="static" color={"secondary"}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <Link to={"/"} style={{ color: "#212121", fontWeight: "bold" }}>
            Goalyn
          </Link>
        </Typography>

        <Stack direction="row" spacing={2}>
          {user ? (
            <CustomButton
              labelName={"Logout"}
              icon={<LogoutIcon />}
              onSubmit={onLogout}
            />
          ) : (
            <>
              <Link to={"/login"}>
                <CustomButton labelName={"Login"} icon={<LoginIcon />} />
              </Link>
              <Link to={"/register"}>
                <CustomButton labelName={"Register"} icon={<PersonIcon />} />
              </Link>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

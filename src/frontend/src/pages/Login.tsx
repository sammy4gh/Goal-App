import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import LoginIcon from "@mui/icons-material/Login";
import Input from "@mui/material/Input";
import { FormControl, InputLabel } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import CustomButton from "../components/CustomButton";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../state/app/hooks";
import { AuthState } from "../../../Types/UserTypes";
import { RootState } from "../state/app/store";
import { toast } from "react-toastify";
import { login, reset } from "../state/features/auth/authSlice";
import Heading from "../components/Heading";

type LoginPropsType = {};
type LoginFormDataType = {
  email: string;
  password: string;
};

const Login = (props: LoginPropsType): JSX.Element => {
  const [formData, setFormData] = useState<LoginFormDataType>({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, isLoading, message, isError, isSuccess }: AuthState =
    useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset);
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();

    const userData = {
      email,
      password
    };

    dispatch(login(userData));
  };
  return (
    <>
      <Grid
        spacing={8}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading title={"Login"} subtitle={" Login to set goals"} />
        <Grid item xs={8}>
          <form onSubmit={onSubmit} style={{ width: "full" }}>
            <Stack spacing={2} style={{ width: "full" }}>
              <FormInput
                formControlProps={{}}
                inputProps={{ name: "email", type: "email" }}
                value={email}
                labelName={"email"}
                onChange={onChange}
              />
              <FormInput
                formControlProps={{}}
                inputProps={{ name: "password", type: "password" }}
                value={password}
                labelName={"password"}
                onChange={onChange}
              />
              <CustomButton
                labelName={"Submit"}
                buttonProps={{ variant: "contained", type: "submit" }}
                onSubmit={onSubmit}
              />
            </Stack>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

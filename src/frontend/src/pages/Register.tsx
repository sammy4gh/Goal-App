import { useEffect, useState, Suspense } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import Input from "@mui/material/Input";
import { FormControl, InputLabel } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import CustomButton from "../components/CustomButton";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/app/store";
import { AuthState } from "../../../Types/UserTypes";
import { toast } from "react-toastify";
import { register, reset } from "../state/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../state/app/hooks";

type RegisterPropsType = {};
type RegisterFormDataType = {
  name: string;
  email: string;
  password?: string;
  password2?: string;
};

const Register = (props: RegisterPropsType): JSX.Element => {
  const [formData, setFormData] = useState<RegisterFormDataType>({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("clicked on submit");
    if (password !== password2) {
      toast.error("Password do nat match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      return dispatch(register(userData));
    }
  };

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Grid
          spacing={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={8} style={{ marginBottom: 20 }}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <PersonIcon sx={{ fontSize: 50 }} />
              <Typography
                variant="h2"
                component="div"
                style={{ fontWeight: "bold" }}
              >
                Register
              </Typography>
            </Stack>
            <Typography
              variant="h4"
              component="div"
              style={{ fontWeight: "bold", color: "grey" }}
            >
              Please register an account
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <form onSubmit={onSubmit} style={{ width: "full" }}>
              <Stack spacing={2} style={{ width: "full" }}>
                <FormInput
                  formControlProps={{}}
                  inputProps={{ name: "name" }}
                  value={name}
                  labelName={"name"}
                  onChange={onChange}
                />
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
                <FormInput
                  formControlProps={{}}
                  inputProps={{ name: "password2", type: "password" }}
                  value={password2}
                  labelName={"confirm password"}
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
      </Suspense>
    </>
  );
};

export default Register;

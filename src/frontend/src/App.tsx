import { FunctionComponent } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import { red, blue, grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const greyColor = grey;
const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#fefefe",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

type AppProps = {};

const App = (props: AppProps) => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <Container maxWidth={"sm"} sx={{ marginTop: 6 }}>
            <Grid container alignItems="center" justifyContent="center">
              <Routes>
                <Route path={"/"} element={<Dashboard />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/register"} element={<Register />} />
              </Routes>
            </Grid>
          </Container>
        </ThemeProvider>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;

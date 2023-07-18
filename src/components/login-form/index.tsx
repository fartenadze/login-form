import {
  Container,
  Divider,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import { FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const gradient =
  //   "linear-gradient(103deg, rgba(186, 217, 254, 1) 0%, rgba(223, 228, 248, 1) 26%, rgba(223, 199, 253, 1) 42%, rgba(193, 195, 254, 1) 64%, rgba(108, 184, 254, 1) 77%, rgba(158, 193, 236, 1) 92%)";

  const signIn = (e: FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.email;
        console.log(user);
        navigate(`/homepage/${user}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const labelStyle = {
    display: "flex",
    justifyContent: "start",
    fontWeight: 700,
    color: "#333",
  };
  const formContainerStyle = {
    display: "grid",
    placeItems: "center",
  };
  return (
    <Container sx={formContainerStyle}>
      <Box>
        <Box display={"flex"} justifyContent={"center"}>
          <LoginSharpIcon
            sx={{
              fontSize: "4rem",
              color: "rgba(108, 90, 254, 1)",
              mr: "30px",
            }}
          />
        </Box>
        <Box mb={6}>
          <Typography variant="h4">Hey, Hello &#128075;</Typography>
          <Typography variant="body2" color={"gray"}>
            Enter The information you entered while registering
          </Typography>
        </Box>
        <Box component="form" onSubmit={signIn}>
          <InputLabel sx={labelStyle}>Email</InputLabel>
          <TextField
            margin="dense"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputLabel required sx={labelStyle}>
            Password
          </InputLabel>
          <TextField
            margin="dense"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: "rgba(98,98,250,1)",
                    "&.Mui-checked": {
                      color: "rgba(98,98,200,1)",
                    },
                  }}
                />
              }
              label="Remember me"
            />
            <Link
              href="#"
              underline="none"
              sx={{
                color: "rgba(98,98,250,1)",
              }}
            >
              Forgot password?
            </Link>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              background:
                "linear-gradient(103deg, rgba(95,173,251,1) 0%, rgba(98,98,250,1) 49%, rgba(157,144,252,1) 100%); ",
              color: "white",
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
          <Divider>or</Divider>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "white",
              textTransform: "capitalize",
              color: "black",
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "rgba(157,144,252,1)",
              },
            }}
          >
            <Box
              component="img"
              sx={{
                width: 30,
                mr: 2,
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
            />
            Sign In with google
          </Button>
          <Box mt={"1rem"} display={"flex"} gap={"1rem"}>
            <Typography>Don't have an account yet?</Typography>
            <Link
              component={RouterLink}
              to={"/register"}
              underline="none"
              sx={{
                color: "rgba(98,98,250,1)",
              }}
            >
              Sign up now
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;

import { Divider, InputLabel, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";

const LoginForm = () => {
  const gradient =
    "linear-gradient(103deg, rgba(186, 217, 254, 1) 0%, rgba(223, 228, 248, 1) 26%, rgba(223, 199, 253, 1) 42%, rgba(193, 195, 254, 1) 64%, rgba(108, 184, 254, 1) 77%, rgba(158, 193, 236, 1) 92%)";
  return (
    <Box component="form">
      <InputLabel
        sx={{
          display: "flex",
          justifyContent: "start",
          fontWeight: 700,
          color: "#333",
        }}
      >
        Email
      </InputLabel>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <InputLabel
        required
        sx={{
          display: "flex",
          justifyContent: "start",
          fontWeight: 700,
          color: "#333",
        }}
      >
        Password
      </InputLabel>
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        type="password"
        id="password"
        autoComplete="current-password"
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
    </Box>
  );
};

export default LoginForm;

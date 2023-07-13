import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Title from "./title";
import Typography from "@mui/material/Typography";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";

import LoginForm from "../../components/form";

const LoginPage = () => {
  const gradient =
    "linear-gradient(103deg, rgba(186, 217, 254, 1) 0%, rgba(223, 228, 248, 1) 26%, rgba(223, 199, 253, 1) 42%, rgba(193, 195, 254, 1) 64%, rgba(108, 184, 254, 1) 77%, rgba(158, 193, 236, 1) 92%)";
  const titleContainerStyle = {
    background: gradient,
    height: "100vh",
    display: "grid",
    placeItems: "center",
  };
  const formContainerStyle = {
    display: "grid",
    placeItems: "center",
  };
  return (
    <Stack direction={"row"}>
      <Container sx={titleContainerStyle}>
        <Box
          width={400}
          height={400}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <Title />
        </Box>
      </Container>
      <Container sx={formContainerStyle}>
        <Box>
          <Box>
            <LoginSharpIcon
              sx={{
                fontSize: "50px",
                color: "rgba(108, 184, 254, 1)",
                mb: "40px",
              }}
            />
          </Box>
          <Box mb={6}>
            <Typography variant="h4">Hey, Hello &#128075;</Typography>
            <Typography variant="body2" color={"gray"}>
              Enter The information you entered while registering
            </Typography>
          </Box>
          <LoginForm />
        </Box>
      </Container>
    </Stack>
  );
};

export default LoginPage;

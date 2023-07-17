import React from "react";
import RegisterForm from "../../components/register-form";
import { Box } from "@mui/material";

const RegisterPage = () => {
  const gradient =
    "linear-gradient(103deg, rgba(186, 217, 254, 1) 0%, rgba(223, 228, 248, 1) 26%, rgba(223, 199, 253, 1) 42%, rgba(193, 195, 254, 1) 64%, rgba(108, 184, 254, 1) 77%, rgba(158, 193, 236, 1) 92%)";
  const titleContainerStyle = {
    background: gradient,
    height: "100vh",
    display: "grid",
    placeItems: "center",
  };
  return (
    <Box sx={titleContainerStyle}>
      <Box
        width={"50%"}
        height={"70%"}
        p={"3rem"}
        borderRadius={"1rem"}
        sx={{
          backgroundColor: "#f1f1f1",
        }}
      >
        <RegisterForm />
      </Box>
    </Box>
  );
};

export default RegisterPage;

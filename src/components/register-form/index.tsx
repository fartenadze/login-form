import {
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { FormEvent, useState } from "react";

import UserInfo from "./steps/userinfo";
import BirthAndGender from "./steps/gender";
import Credentials from "./steps/credentials";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useFormData } from "../../context/form-context";
import { auth } from "../../firebase";
import { create } from "domain";

const steps = [
  "Enter Your Name",
  "Enter Your Birthday and gender",
  "Write Email and Password",
];

const RegisterForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { formData } = useFormData();
  const createUser = (e: FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    // setCurrentStep(0);
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const formContainerStyle = {
    display: "grid",
    placeItems: "center",
    height: "100%",
    position: "relative",
  };

  type FieldsType = {
    [key: number]: React.ReactNode;
  };

  const fields: FieldsType = {
    0: <UserInfo />,
    1: <BirthAndGender />,
    2: <Credentials />,
  };

  return (
    <Container sx={formContainerStyle}>
      <Box
        sx={{
          pt: 2,
          alignSelf: "flex-start",
        }}
      >
        <Typography variant="h4" mb={"2rem"} textAlign={"center"}>
          Creating Account
        </Typography>
        <Stepper activeStep={currentStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};

            return (
              <Step
                key={label}
                {...stepProps}
                sx={{
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "rgba(108, 150, 254, 1)",
                  },
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: "rgba(30, 110, 254, 1)",
                  },
                }}
              >
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>

      <Box
        component={"form"}
        onSubmit={createUser}
        sx={{
          width: "100%",
          display: "grid",
          placeItems: "center",
          height: "100%",
        }}
      >
        {fields[currentStep]}
        <Box
          sx={{
            display: "flex",
            alignSelf: "flex-end",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Button
            size="large"
            variant="outlined"
            disabled={currentStep === 0}
            onClick={handleBack}
            sx={{
              mr: 2,
              color: "rgba(108, 150, 254, 1)",
              borderColor: "rgba(108, 150, 254, 1)",
            }}
          >
            Back
          </Button>

          {currentStep === steps.length - 1 ? (
            <Button
              type="submit"
              size="large"
              variant="contained"
              onClick={handleNext}
              sx={{
                background: "rgba(108, 150, 254, 1)",
                ":hover": {
                  background: "rgba(30, 110, 254, 1)",
                },
              }}
            >
              Finish
            </Button>
          ) : (
            <Button
              size="large"
              variant="contained"
              onClick={handleNext}
              sx={{
                background: "rgba(108, 150, 254, 1)",
                ":hover": {
                  background: "rgba(30, 110, 254, 1)",
                },
              }}
            >
              Next
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;

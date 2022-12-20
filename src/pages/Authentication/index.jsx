import { Button, Typography, useTheme } from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomTextField } from "../../components/CustomTextField";
import LogoWhite from "../../assets/Block-logo-white.png";
import Logo from "../../assets/Block-logo.png";
import * as yup from "yup";
import { Formik } from "formik";

const Authentication = ({ setIsloggedin, setUserConnected }) => {
  const theme = useTheme();

  const initialValues = {
    email: "",
    password: "",
  };

  const userSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid e-mail")
      .required("Please fill the field"),
    password: yup.string().required("Please fill the field"),
  });

  const [users, setUsers] = useState({}); 
  const [loginError, setLoginError] = useState(false)
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8001/apip/users", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setUsers(res.data["hydra:member"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(users);
 
  const handleFormSubmit = (values) => {
    users.map((user) => {
      if(values.email == user.email && values.password == user.password){
        setUserConnected(user)
        setIsloggedin(true)
      } else{
        setLoginError(true)
      }
    })
  };


  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 400,
          height: 500,
          p: 2,
        }}
      >
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={userSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={3}
                direction={"column"}
                sx={{
                  alignItems: "center",
                }}
              >
                {theme.palette.mode === "dark" ? (
                  <img src={LogoWhite} alt="logo-white" />
                ) : (
                  <img src={Logo} alt="logo" />
                )}

                {loginError && 
                  <Typography variant="h5" color='error'>
                    Invalid Credentials
                  </Typography>
                }

                <CustomTextField
                  fullWidth
                  label="E-mail"
                  variant="outlined"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  
                />

                <CustomTextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
                <Button
                  type="submit"
                  sx={{
                    width: 200,
                    height: 50,
                    backgroundColor: "#FF5C36",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#FF380A",
                    },
                  }}
                  variant="contained"
                >
                  Login
                </Button>
              </Stack>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Authentication;

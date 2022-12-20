import React, { useState } from "react";
import { Box, Button, InputLabel, Select, useMediaQuery } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import { CustomTextField } from "../../components/CustomTextField";
import { CustomSelectField } from "../../components/CustomSelectField";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phoneNumber: "",
  adress: "",
  salary: "",
  role: "",
  sexe: "",
  password: ""
};


const userSchema = yup.object().shape({
  firstName: yup.string().required("Please fill the field"),
  lastName: yup.string().required("Please fill the field"),
  userName: yup.string().required("Please fill the field"),
  email: yup.string().email("Invalid e-mail").required("Please fill the field"),
  phoneNumber: yup
    .string()
    .required("Please fill the field"),
  adress: yup.string().required("Please fill the field"),
  salary: yup.number().required("please fill the field"),
  role: yup.string().required("Please fill the field"),
  password: yup.string().required("Please fill the field"),
});

const AddEmployee = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [users, setUsers] = useState([])
  const navigate = useNavigate();

  const handleFormSubmit = (values) => {
     axios.post('http://127.0.0.1:8001/apip/users', values)
      .then(res => {
        setUsers(res.data),
        navigate('/employees')
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <Box m="0 0 0 20px">
      <Header title="Add Employee" subtitle="Create an employee profile" />

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
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                },
                width: "90%",
              }}
            >
              <CustomTextField
                label="First Name"
                variant="outlined"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  gridColumn: "span 2",
                }}
              />

              <CustomTextField
                label="Last Name"
                variant="outlined"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{
                  gridColumn: "span 2",
                }}
              />

              <CustomTextField
                label="Username"
                variant="outlined"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userName}
                name="userName"
                error={!!touched.userName && !!errors.userName}
                helperText={touched.userName && errors.userName}
                sx={{
                  gridColumn: "span 4",
                }}
              />

              <CustomTextField
                label="E-mail"
                variant="outlined"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{
                  gridColumn: "span 4",
                }}
              />

              <CustomTextField
                label="Phone Number"
                variant="outlined"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNumber}
                name="phoneNumber"
                error={!!touched.phoneNumber && !!errors.phoneNumber}
                helperText={touched.phoneNumber && errors.phoneNumber}
              />

              <CustomTextField
                label="address"
                variant="outlined"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.adress}
                name="adress"
                error={!!touched.adress && !!errors.adress}
                helperText={touched.adress && errors.adress}
              />

              <CustomTextField 
                label="salary" 
                variant="outlined" 
                type="number" 
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.salary}
                name="salary"
                error={!!touched.salary && !!errors.salary}
                helperText={touched.salary && errors.salary}
              />

              <CustomSelectField>
                <InputLabel>role</InputLabel>
                <Select
                 label="role"
                 onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.role}
                  name="role"
                  error={!!touched.role && !!errors.role}
                  helperText={touched.role && errors.role}
                >
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Employee">Employee</MenuItem>
                </Select>
              </CustomSelectField>

              <CustomSelectField>
                <InputLabel>Sexe</InputLabel>
                <Select
                 label="Sexe"
                 onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.sexe}
                  name="sexe"
                  error={!!touched.sexe && !!errors.sexe}
                  helperText={touched.sexe && errors.sexe}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </CustomSelectField>

              <CustomTextField
                label="password"
                variant="outlined"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{
                  gridColumn: 'span 3'
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                mt: "20px",
                width: "90%",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Create new User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddEmployee;

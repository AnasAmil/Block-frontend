import React from "react";
import { Box, Button, InputLabel, Select, useMediaQuery } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import { CustomTextField } from "../../components/CustomTextField";
import { CustomSelectField } from "../../components/CustomSelectField";

const initialValues = {
  FirstName: "",
  LastName: "",
  Username: "",
  Email: "",
  PhoneNumber: "",
  Address: "",
  Salary: "",
  Role: "",
  Password: ""
};


const userSchema = yup.object().shape({
  FirstName: yup.string().required("Please fill the field"),
  LastName: yup.string().required("Please fill the field"),
  Username: yup.string().required("Please fill the field"),
  Email: yup.string().email("Invalid e-mail").required("Please fill the field"),
  PhoneNumber: yup
    .string()
    .required("Please fill the field"),
  Address: yup.string().required("Please fill the field"),
  Salary: yup.number().required("please fill the field"),
  Role: yup.string().required("Please fill the field"),
  Password: yup.string().required("Please fill the field"),
});

const AddEmployee = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
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
                value={values.FirstName}
                name="FirstName"
                error={!!touched.FirstName && !!errors.FirstName}
                helpertext={touched.FirstName && errors.FirstName}
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
                value={values.LastName}
                name="LastName"
                error={!!touched.LastName && !!errors.LastName}
                helpertext={touched.LastName && errors.LastName}
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
                value={values.Username}
                name="Username"
                error={!!touched.Username && !!errors.Username}
                helpertext={touched.Username && errors.Username}
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
                value={values.Email}
                name="Email"
                error={!!touched.Email && !!errors.Email}
                helpertext={touched.Email && errors.Email}
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
                value={values.PhoneNumber}
                name="PhoneNumber"
                error={!!touched.PhoneNumber && !!errors.PhoneNumber}
                helpertext={touched.PhoneNumber && errors.PhoneNumber}
              />

              <CustomTextField
                label="Address"
                variant="outlined"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Address}
                name="Address"
                error={!!touched.Address && !!errors.Address}
                helpertext={touched.Address && errors.Address}
              />

              <CustomTextField 
                label="Salary" 
                variant="outlined" 
                type="text" 
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Salary}
                name="Salary"
                error={!!touched.Salary && !!errors.Salary}
                helpertext={touched.Salary && errors.Salary}
              />

              <CustomSelectField>
                <InputLabel>Role</InputLabel>
                <Select
                 label="Role"
                 onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Role}
                  name="Role"
                  error={!!touched.Role && !!errors.Role}
                  helpertext={touched.Role && errors.Role}
                >
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Employee">Employee</MenuItem>
                </Select>
              </CustomSelectField>

              <CustomTextField
                label="Password"
                variant="outlined"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Password}
                name="Password"
                error={!!touched.Password && !!errors.Password}
                helpertext={touched.Password && errors.Password}
                sx={{
                  gridColumn: 'span 4'
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

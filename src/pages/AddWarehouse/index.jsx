import { Box, Button,  useMediaQuery } from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import Header from "../../components/Header";
import React, { useState } from "react";
import * as yup from "yup";
import { CustomTextField } from "../../components/CustomTextField";
import { useNavigate } from "react-router-dom";

const initialValues = {
  warehouseName: "",
  location: "",
  phoneNumber: "",
  maxCells: "",
};

const warehouseSchema = yup.object().shape({
  warehouseName: yup.string().required("Please fill the field"),
  location: yup.string().required("Please fill the field"),
  phoneNumber: yup.string().required("Please fill the field"),
  maxCells: yup.number().required("Please fill the field"),
});

const AddWarehouse = () => {

  const [warehouse, setWarehouse] = useState({})
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const navigate = useNavigate()

  const handleFormSubmit = (values) => {
     axios.post('http://127.0.0.1:8001/apip/warehouses', values)
      .then(res => {
        setWarehouse(res.data),
        navigate('/warehouses')
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <Box m="0 0 0 20px">
      <Header title="Add Warehouse" subtitle="Add a warehouse" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={warehouseSchema}
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
                label="Name"
                variant="outlined"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.warehouseName}
                name="warehouseName"
                error={!!touched.warehouseName && !!errors.warehouseName}
                helperText={touched.warehouseName && errors.warehouseName}
                sx={{
                  gridColumn: "span 2",
                }}
              />

              <CustomTextField
                label="location"
                variant="outlined"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.location}
                name="location"
                error={!!touched.location && !!errors.location}
                helperText={touched.location && errors.location}
                sx={{
                  gridColumn: "span 2",
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
                sx={{
                  gridColumn: "span 2",
                }}
              />

              <CustomTextField
                label="maxCells"
                variant="outlined"
                type="number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.maxCells}
                name="maxCells"
                error={!!touched.maxCells && !!errors.maxCells}
                helperText={touched.maxCells && errors.maxCells}
                sx={{
                  gridColumn: "span 2",
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
                Add new warehouse
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddWarehouse;

import { Box, Button, Modal, Typography, useMediaQuery, useTheme } from "@mui/material";
import { colorCodes } from "../theme";
import * as yup from "yup";
import React from "react";
import { Formik } from "formik";
import { CustomTextField } from "./CustomTextField";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialValues = {
  productName: "",
  quantity: "",
  priceUnit: "",
  mass: "",
  cellOccupation: "",
};

const productSchema = yup.object().shape({
  productName: yup.string().required("Please fill the field"),
  quantity: yup.number().required("Please fill the field"),
  priceUnit: yup.number().required("Please fill the field"),
  mass: yup.number().required("Please fill the field"),
  cellOccupation: yup.number().required("Please fill the field"),
});

const EditModal = ({ open, modalHandler, id }) => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const theme = useTheme();
  const colors = colorCodes(theme.palette.mode);
  const navigate = useNavigate()

  const handleFormSubmit = (values) => {
    
    axios.put(`http://127.0.0.1:8001/apip/products/${id}`, values, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          console.log(res.data)
          modalHandler()
        })
        .catch(err => {
          console.log(err);
        })
  };

  return (
    <Modal hideBackdrop open={open} onClose={modalHandler}>
      <Box
        sx={{
          backgroundColor: colors.primary[400],
          width: 800,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: 'column',
          py: "20px",
          m: "auto",
          position: "absolute",
          top: "20%",
          left: "25%",
          borderRadius: 2,
        }}
      >
        <Typography
            variant='h2'
            sx={{
                fontWeight: 'bold',
                mb: '10px'
            }}
        >
            Modify Product 
        </Typography>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={productSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit} style={{ width: "80%" }}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": {
                    gridColumn: isNonMobile ? undefined : "span 4",
                  },
                  width: "100%",
                }}
              >

                <CustomTextField
                  label="Product Name"
                  variant="outlined"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.productName}
                  name="productName"
                  error={!!touched.productName && !!errors.productName}
                  helperText={touched.productName && errors.productName}
                  sx={{
                    gridColumn: "span 2",
                  }}
                />

                <CustomTextField
                  label="Quantity"
                  variant="outlined"
                  type="number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.quantity}
                  name="quantity"
                  error={!!touched.quantity && !!errors.quantity}
                  helperText={touched.quantity && errors.quantity}
                  sx={{
                    gridColumn: "span 2",
                  }}
                />

                <CustomTextField
                  label="Price"
                  variant="outlined"
                  type="number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.priceUnit}
                  name="priceUnit"
                  error={!!touched.priceUnit && !!errors.priceUnit}
                  helperText={touched.priceUnit && errors.priceUnit}
                  sx={{
                    gridColumn: "span 2",
                  }}
                />

                <CustomTextField
                  label="Mass"
                  variant="outlined"
                  type="number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.mass}
                  name="mass"
                  error={!!touched.mass && !!errors.mass}
                  helperText={touched.mass && errors.mass}
                  sx={{
                    gridColumn: "span 2",
                  }}
                />

                <CustomTextField
                  label="Cell Occupation"
                  variant="outlined"
                  type="number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.cellOccupation}
                  name="cellOccupation"
                  error={!!touched.cellOccupation && !!errors.cellOccupation}
                  helperText={touched.cellOccupation && errors.cellOccupation}
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  gap: '10px',
                  mt: "20px",
                  width: "100%",
                }}
              >
                <Button
                  variant="text"
                  color="error"
                  sx={{
                    fontWeight: "bold",
                  }}
                  onClick={modalHandler}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Modify Product
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default EditModal;

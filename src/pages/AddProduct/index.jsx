import { Box, Button, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import Header from "../../components/Header";
import React, { useState } from "react";
import * as yup from "yup";
import { CustomTextField } from "../../components/CustomTextField";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const { id } = useParams();

  const [product, setProduct] = useState({})
  const navigate = useNavigate()
  const handleFormSubmit = (values) => {
    axios.post('http://127.0.0.1:8001/apip/products', values)
      .then(res => {
        setProduct(res.data),
        navigate('/warehouses')
      })
      .catch(err => {
        console.log(err);
      })
  };

  console.log(product);

  const initialValues = {
    productName: "",
    warehouse: `/apip/warehouses/${id}`,
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

  return (
    <Box m="0 0 0 20px">
      <Header title="Add product" subtitle="Add a Product" />

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
                label="Warehouse"
                variant="outlined"
                type="text"
                disabled
                value={values.warehouse}
                name="warehouse"
                error={!!touched.warehouse && !!errors.warehouse}
                helperText={touched.warehouse && errors.warehouse}
                sx={{
                  gridColumn: "span 4",
                }}
              />

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
                Add Product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddProduct;

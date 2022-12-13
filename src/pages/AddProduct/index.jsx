import { Box, Button, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import Header from "../../components/Header";
import React from "react";
import * as yup from "yup";
import { CustomTextField } from "../../components/CustomTextField";
import { useParams } from "react-router-dom";

const AddProduct = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const { id } = useParams();

  const initialValues = {
    ProductName: "",
    warehouse_id: id,
    Quantity: "",
    Price: "",
    Mass: "",
    Date: "",
    CellOccupation: "",
  };

  const productSchema = yup.object().shape({
    ProductName: yup.string().required("Please fill the field"),
    Quantity: yup.string().required("Please fill the field"),
    Price: yup.number().required("Please fill the field"),
    Mass: yup.number().required("Please fill the field"),
    CellOccupation: yup.number().required("Please fill the field"),
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
                value={values.warehouse_id}
                name="warehouse_id"
                error={!!touched.warehouse_id && !!errors.warehouse_id}
                helperText={touched.warehouse_id && errors.warehouse_id}
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
                value={values.ProductName}
                name="ProductName"
                error={!!touched.ProductName && !!errors.ProductName}
                helperText={touched.ProductName && errors.ProductName}
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
                value={values.Quantity}
                name="Quantity"
                error={!!touched.Quantity && !!errors.Quantity}
                helperText={touched.Quantity && errors.Quantity}
                sx={{
                  gridColumn: "span 2",
                }}
              />

              <CustomTextField
                label="Price"
                variant="outlined"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Price}
                name="Price"
                error={!!touched.Price && !!errors.Price}
                helperText={touched.Price && errors.Price}
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
                value={values.Mass}
                name="Mass"
                error={!!touched.Mass && !!errors.Mass}
                helperText={touched.Mass && errors.Mass}
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
                value={values.CellOccupation}
                name="CellOccupation"
                error={!!touched.CellOccupation && !!errors.CellOccupation}
                helperText={touched.CellOccupation && errors.CellOccupation}
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

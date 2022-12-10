import React from 'react'
import { Box, Button, TextField, useMediaQuery } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import Header from '../../components/Header'

const initialValues = {
    FirstName: '',
    LastName: '',
    Username: '',
    Email: '',
    PhoneNumber: '',
    Address: '',
    Salary: '',
    Role: ''

}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/; 

const userSchema = yup.object().shape({
    FirstName: yup.string().required("Please fill the field"),
    LastName: yup.string().required("Please fill the field"),
    Email: yup.string().email("Invalid e-mail").required("Please fill the field"),
    PhoneNumber: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Please fill the field"),
    Address: yup.string().required("Please fill the field"),
    Salary: yup.number().required("please fill the field"),
    Role: yup.string().required("Please fill the field"),
})

const AddEmployee = () => {

    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const handleFormSubmit = (values) => {
        console.log(values);
    }

  return (
    <Box m='0 0 0 20px' >
        <Header title='Add Employee' subtitle='Create an employee profile' />

        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
        >

            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display='grid'
                        gap='30px'
                        gridTemplateColumns='repeat(4, minmax(0, 1fr))'
                        sx={{
                            '& > div': {
                                gridColumn : isNonMobile ? undefined : 'span 4'
                            }
                        }}
                    >

                    </Box>
                </form>
            )}

        </Formik>
    </Box>
  )
}

export default AddEmployee
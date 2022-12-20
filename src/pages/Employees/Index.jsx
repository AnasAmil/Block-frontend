import React, { useEffect, useState } from 'react'
import { colorCodes } from '../../theme'
import { Box, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import Header from '../../components/Header'
import ActionCell from '../../components/ActionCell'
import RoleCell from '../../components/RoleCell'
import axios from 'axios'



const Employees = () => {

    const [users, setUsers] = useState({});
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

    const theme = useTheme()
    const colors = colorCodes(theme.palette.mode)

    const columns = [
        {
            field: 'firstName',
            headerName: 'First Name',
            width: 150
        },
    
        {
            field: 'lastName',
            headerName: 'Last Name',
            width: 150
        },
    
        {
            field: 'email',
            headerName: 'E-mail',
            width: 200
        },

        {
            field: 'phoneNumber',
            headerName: 'Phone number',
            width: 150
        },
    
        {
            field: 'role',
            headerName: 'Role',
            width: 150,
            renderCell: ({ row: {role} }) => <RoleCell role={role} />
        },
    
        {
            field: 'action',
            headerName: '',
            width: 100,
            renderCell: () => <ActionCell />
        },
    ]

    const rows = users;

  return (
    <>
        <Box m='0 0 0 20px' >
            <Header title='Employees' subtitle='This is your employees' />
        </Box>

        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box
                sx={{
                    width: '80%',
                    height: 400,
                    
                }}
            >
                <DataGrid 
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableColumnSelector
                    disableSelectionOnClick
                />
            </Box>
        </Box>
    </>
  )
}

export default Employees
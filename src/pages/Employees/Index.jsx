import React from 'react'
import { colorCodes } from '../../theme'
import { Box, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import Header from '../../components/Header'
import { mockDataTeam } from '../../data/MockData'
import ActionCell from '../../components/ActionCell'
import RoleCell from '../../components/RoleCell'



const Employees = () => {

    const theme = useTheme()
    const colors = colorCodes(theme.palette.mode)

    const columns = [
        {
            field: 'first_name',
            headerName: 'First Name',
            width: 150
        },
    
        {
            field: 'last_name',
            headerName: 'Last Name',
            width: 150
        },
    
        {
            field: 'email',
            headerName: 'E-mail',
            width: 200
        },

        {
            field: 'phone_number',
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

    const rows = mockDataTeam;

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
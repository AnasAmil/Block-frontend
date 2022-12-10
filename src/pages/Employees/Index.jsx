import React from 'react'
import { colorCodes } from '../../theme'
import { Box, useTheme, Stack, IconButton, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import Header from '../../components/Header'
import { mockDataTeam } from '../../data/MockData'
import ActionCell from '../../components/ActionCell'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'


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
            width: 300
        },
    
        {
            field: 'role',
            headerName: 'Role',
            width: 150,
            renderCell: ({ row: {role} }) => {
                return (
                    <Box
                        sx={{
                            width: '80%',
                            margin: '0 auto',
                            padding: '5px',
                            display: 'flex',
                            justifyContent: 'space-around',
                            borderRadius: '20px',
                            border: `1px solid ${ role == 'admin' ? colors.greenVibrant[500] : colors.redVibrant[500] }`,
                        }}

                        backgroundColor={role == 'admin' ? colors.greenVibrant[900] : colors.redVibrant[900]}
                    >

                        { role == 'admin' ? <AdminPanelSettingsOutlinedIcon sx={{ color: colors.greenVibrant[500] }} /> : <BadgeOutlinedIcon sx={{ color: colors.redVibrant[500] }} />}
                        
                        <Typography color={ role == 'admin' ? colors.greenVibrant[500] : colors.redVibrant[500] }>
                            {role}
                        </Typography>

                    </Box>
                )
            }
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
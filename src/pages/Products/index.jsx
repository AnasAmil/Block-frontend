import React from 'react'
import { Box, useTheme } from '@mui/system'
import Header from '../../components/Header'
import { colorCodes } from '../../theme'
import { mockDataProduct } from '../../data/MockData'
import { DataGrid } from '@mui/x-data-grid'
import ActionCell from '../../components/ActionCell'

const Products = () => {

    const theme = useTheme()
    const colors = colorCodes(theme.palette.mode)

    const columns = [
        {
            field: 'product_name',
            headerName: 'Product Name',
            width: 150
        },
    
        {
            field: 'quantity',
            headerName: 'Quantity',
            width: 150
        },
    
        {
            field: 'price',
            headerName: 'Price/U',
            width: 200
        },

        {
            field: 'mass',
            headerName: 'Mass/U',
            width: 150
        },
    
        {
            field: 'date',
            headerName: 'Date',
            width: 150
        },

        {
            field: 'cell_occupation',
            headerName: 'Cell',
            width: 150
        },
    
        {
            field: 'action',
            headerName: '',
            width: 100,
            renderCell: () => <ActionCell />
        },
    ]

    const rows = mockDataProduct;

  return (
    <>
        <Box m='0 0 0 20px' >
            <Header title='Products' subtitle='This is your products' />
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

export default Products
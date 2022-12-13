import React, { useEffect, useState } from 'react'
import { Box, useTheme } from '@mui/system'
import Header from '../../components/Header'
import { colorCodes } from '../../theme'
import { DataGrid } from '@mui/x-data-grid'
import ActionCell from '../../components/ActionCell'
import axios from 'axios'

const Products = () => {

    const [Products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8001/apip/products', {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
            setProducts(res.data['hydra:member'])
        })
        .catch(err => {
            console.log(err);
        })
      }, [])

    const theme = useTheme()
    const colors = colorCodes(theme.palette.mode)

    const columns = [
        {
            field: 'productName',
            headerName: 'Product Name',
            width: 150
        },
    
        {
            field: 'quantity',
            headerName: 'Quantity',
            width: 150
        },
    
        {
            field: 'priceUnit',
            headerName: 'Price/U',
            width: 80
        },

        {
            field: 'mass',
            headerName: 'Mass/U',
            width: 100
        },
    
        {
            field: 'dateCreation',
            headerName: 'Date',
            width: 250
        },

        {
            field: 'cellOccupation',
            headerName: 'Cell',
            width: 50
        },
    
        {
            field: 'action',
            headerName: '',
            width: 100,
            renderCell: ({ row: {id} }) => <ActionCell id={id} />
        },
    ]

    const rows = Products;

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
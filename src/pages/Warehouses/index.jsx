import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { colorCodes } from '../../theme'
import { Box, useTheme, Grid, Card, Typography, Button } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Header from '../../components/Header'
import WarehouseImg from '../../assets/Warehouse-illustration.png'
import { Link, useLocation } from 'react-router-dom';

const Warhouses = () => {
  const [warehouses, setWarehouses] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:8001/apip/warehouses', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
        setWarehouses(res.data['hydra:member'])
    })
    .catch(err => {
        console.log(err);
    })
  }, [])

  const theme = useTheme()
  const colors = colorCodes(theme.palette.mode)
  const { pathname } = useLocation()
  return (
    <>
        <Box  m='0 0 0 20px' >
          <Header title='Warehouses' subtitle='This is your warehouses' />
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
            component={Link}
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: "bold",
              mb: '50px'
            }}
            to='/add_warehouse'
          >
            Add Warehouse
          </Button>
        </Box>

        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={10}>
                  {warehouses.map((warehouse, index) => (
                    <Grid key={index} item>
                      <Card
                        sx={{
                          height: 380,
                          width: 300,
                          backgroundColor: colors.primary[400]
                        }}
                      >

                        <CardMedia 
                          component='img'
                          image={WarehouseImg}
                          sx={{
                            width: '80%',
                            alignSelf: 'center',
                            m: '0 auto'
                          }}

                        />

                        <CardContent
                          sx={{
                            display: 'flex',
                            flexDirection : 'column',
                            justifyContent: 'space-between'
                          }}
                        >
                            <Typography
                              variant='h4'
                              sx={{
                                fontWeight: 'bold',
                                color: colors.greenVibrant[500]
                              }}
                            >
                              {warehouse.warehouseName}
                            </Typography>

                            <Typography
                              variant='h6'
                            >
                              <span style={{ fontWeight: 'bold' }}>Location: </span>{warehouse.location}
                            </Typography>

                            <Typography
                              variant='h6'
                            >
                              <span style={{ fontWeight: 'bold' }}>Cells: </span>{warehouse.maxCells}
                            </Typography>

                            <Typography
                              variant='h6'
                            >
                              <span style={{ fontWeight: 'bold' }}>Phone Number: </span>{warehouse.phoneNumber}
                            </Typography>
                        </CardContent>

                        <CardActions>
                          <Button 
                            variant='text'
                            component={Link}
                            sx={{
                              color: colors.orangeVibrant[500],
                              fontWeight: 'bold'
                            }}
                            to={`${pathname}/${warehouse.id}`}
                          >
                            See Warehouse
                          </Button>
                        </CardActions>

                      </Card>
                    </Grid>
                  ))}
                </Grid>
            </Grid>
      
        </Grid>
        
    </>
  )
}

export default Warhouses
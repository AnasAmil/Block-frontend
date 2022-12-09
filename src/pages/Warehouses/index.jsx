import React from 'react'
import { colorCodes } from '../../theme'
import { Box, useTheme, Grid, Card, Typography, Button } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { mockDataWarehouses } from '../../data/MockData'
import Header from '../../components/Header'
import WarehouseImg from '../../assets/Warehouse-img.jpg'
import { Link } from 'react-router-dom';

const Warhouses = () => {

  const theme = useTheme()
  const colors = colorCodes(theme.palette.mode)

  return (
    <>
        <Box  m='0 0 0 20px' >
          <Header title='Warehouses' subtitle='This is your warehouses' />
        </Box>

        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={10}>
                  {mockDataWarehouses.map((warehouse, index) => (
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
                              {warehouse.name}
                            </Typography>

                            <Typography
                              variant='h6'
                            >
                              <span style={{ fontWeight: 'bold' }}>Location: </span>{warehouse.location}
                            </Typography>

                            <Typography
                              variant='h6'
                            >
                              <span style={{ fontWeight: 'bold' }}>Cells: </span>{warehouse.cells}
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
                            to={`/warehouses/${warehouse.id}`}
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
import React from 'react'
import { colorCodes } from '../../theme'
import { Box, useTheme, Grid, Card } from '@mui/material'
import Header from '../../components/Header'
import LogoOnly from '../../assets/block-logo-only.png'

const Warhouses = () => {

  const theme = useTheme()
  const colors = colorCodes(theme.palette.mode)

  return (
    <>
        <Box  m='0 0 0 20px' >
          <Header title='Warehouses' subtitle='This is your warehouses' />
        </Box>

        <Box>
            <Grid
              sx={{ flexGrow: 1 }}
              container
              spacing={2}
            >

              <Grid item xs={12} >
                <Card
                  sx={{
                    maxWidth: 275,
                    backgroudColor: colors.primary[400]
                  }}
                >
                  test
                </Card>
              </Grid>

            </Grid>
        </Box>
    </>
  )
}

export default Warhouses
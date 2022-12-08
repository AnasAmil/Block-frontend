import React from 'react'
import { Typography, Box, useTheme } from '@mui/material'
import { colorCodes } from '../theme'

const Header = ({ title, subtitle }) => {

    const theme = useTheme();
    const colors = colorCodes(theme.palette.mode);

  return (
    <Box 
        sx={{
            mb: '30px'
        }}
    >
        <Typography
            variant='h2'
            color={colors.grey[100]}
            sx={{
                fontWeight: 'bold',
                mb: '5px'
            }}
        >
            {title}
        </Typography>

        <Typography
            variant='h5'
            color={colors.orangeVibrant[500 ]}
        >
            {subtitle}
        </Typography>
    </Box>
  )
}

export default Header
import React from 'react'
import { Box, Button, Stack} from '@mui/material';
import Logo from '../assets/Block-logo.png'
import { CustomTextField } from './CustomTextField';

const LoginForm = () => {
  return (
    <Box sx={{
          width: 400,
          height: 500,
          p: 2,
    }}
    >
        <Stack
          spacing={3}
          direction={'column'}
          sx={{
            alignItems: 'center'
          }}
        >

          <img src={Logo} alt="Block-logo" /> 

          <CustomTextField 
            label="E-mail" 
            required
            variant="outlined"
            sx={{
              width: 1,
            }}
          />

          <CustomTextField  
            label="Password" 
            required
            variant="outlined"
            type="password"
            sx={{
              width: 1
            }}
          />

          <Button 
            sx={{
              width: 200,
              height: 50,
              backgroundColor: "#FF5C36",
              '&:hover': {
                backgroundColor: '#FF380A'
              },
            }}
            variant="contained"
          >
            Login
          </Button>
        </Stack>
    </Box>
  )
}

export default LoginForm
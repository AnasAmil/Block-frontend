import { Box,  Typography, useTheme } from '@mui/material'
import { colorCodes } from '../../theme';
import React from 'react'
import Header from '../../components/Header'
import MaleAvatar from "../../assets/Male_Avatar.webp";
import FemaleAvatar from "../../assets/Female_Avatar.png"

const Profile = ({ userConnected }) => {

  const theme = useTheme()
  const colors = colorCodes(theme.palette.mode)

  return (
    <>
        <Box m='0 0 0 20px'>
            <Header title='Profile' subtitle='This is your profile' />
        </Box>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                width: '50%',
                m: '0 auto',

            }}
        >
            {userConnected.sexe == 'Male' ? (
                  <img
                    src={MaleAvatar}
                    width="150px"
                    height="150px"
                    alt="user_avatar"
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                ) : (
                  <img
                    src={FemaleAvatar}
                    width="100px"
                    height="100px"
                    alt="user_avatar"
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                )}

                <Typography
                  variant='h3'
                  sx={{
                    fontWeight: 'bold',
                    mt: '10px'
                  }}
                >
                  {userConnected.firstName} {userConnected.lastName}
                </Typography>

                <Typography
                  variant='h4'
                  sx={{
                    color: colors.greenVibrant[500],
                    mt: '10px',
                  }}
                >
                  {userConnected.role}
                </Typography>
                
                <Typography
                  variant='h4'
                  sx={{
                    mt: '10px'
                  }}
                >
                 <strong>Email: </strong> {userConnected.email}
                </Typography>

                <Typography
                  variant='h4'
                  sx={{
                    mt: '10px'
                  }}
                >
                 <strong>Phone Number: </strong> {userConnected.phoneNumber}
                </Typography>

                <Typography
                  variant='h4'
                  sx={{
                    mt: '10px'
                  }}
                >
                 <strong>Address: </strong> {userConnected.adress}
                </Typography>


        </Box>
    </>
  )
}

export default Profile
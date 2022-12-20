import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { colorCodes } from '../theme'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'

const RoleCell = ({ role }) => {

    const theme = useTheme()
    const colors = colorCodes(theme.palette.mode)

  return (
    <Box
    sx={{
        width: '80%',
        margin: '0 auto',
        padding: '5px',
        display: 'flex',
        justifyContent: 'space-around',
        borderRadius: '20px',
        border: `1px solid ${ role == 'Admin' ? colors.greenVibrant[500] : colors.redVibrant[500] }`,
    }}

    backgroundColor={role == 'Admin' ? colors.greenVibrant[900] : colors.redVibrant[900]}
>

    { role == 'Admin' ? <AdminPanelSettingsOutlinedIcon sx={{ color: colors.greenVibrant[500] }} /> : <BadgeOutlinedIcon sx={{ color: colors.redVibrant[500] }} />}
    
    <Typography color={ role == 'Admin' ? colors.greenVibrant[500] : colors.redVibrant[500] }>
        {role}
    </Typography>

</Box>
  )
}

export default RoleCell
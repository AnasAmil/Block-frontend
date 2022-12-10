import React from 'react'
import { IconButton, Stack, useTheme } from '@mui/material'
import { colorCodes } from '../theme'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

const ActionCell = () => {

    const theme = useTheme()
    const colors = colorCodes(theme.palette.mode)

  return (
    <Stack
        direction='row'
        spacing={1}
    >
        <IconButton>
            <ModeEditOutlineOutlinedIcon sx={{ color: colors.greenVibrant[500] }} />
        </IconButton>

        <IconButton>
            <DeleteOutlineOutlinedIcon sx={{ color: colors.redVibrant[500] }} />
        </IconButton>
                    
    </Stack>
  )
}

export default ActionCell
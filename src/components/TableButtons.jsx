import React from 'react'
import { Stack, useTheme } from '@mui/material'
import { colorCodes } from '../theme'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'


const TableButtons = () => {

    const theme = useTheme()
    const colors = colorCodes(theme.palette.mode)

  return (
    <Stack
        direction='row'
        spacing={3}
    >
        <ModeEditOutlineOutlinedIcon color={colors.greenVibrant[500]} />
        <DeleteOutlineOutlinedIcon  color='#E11414' />
    </Stack>
  )
}

export default TableButtons
import { useState } from 'react'
import { useProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, Typogaphy, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { colorCodes } from '../../theme'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';

const Sidebar = () => {

  const theme = useTheme();
  const colors = colorCodes(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          
        },
      }}
    >

    </Box>
  )
}

export default Sidebar
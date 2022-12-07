import { useState } from 'react'
import { useProSidebar , Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { colorCodes } from '../../theme'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { display } from '@mui/system'
import Logo from '../../assets/Block-logo.png'
import LogoWhite from '../../assets/Block-logo-white.png'
import MaleAvatar from '../../assets/Male_Avatar.webp'

const Appbar = () => {

  const theme = useTheme();
  const colors = colorCodes(theme.palette.mode);
  const [selected, setSelected] = useState('Dashboard');
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <Box
      sx={{
        height: "100%",
        display: 'flex'
      }}
    >

    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: `${colors.primary[400]}`,
        },
      }}

      transitionDuration={500}
    >
      <Menu>
        <MenuItem
              onClick={() => collapseSidebar()}
              icon={collapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "40px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              
              {!collapsed && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginLeft: '15px',
                }}
              >
                
                {theme.palette.mode === 'dark' ? (
                  <img src={LogoWhite} alt="logo-white" />
                ) : (
                  <img src={Logo} alt="logo" />
                )}
                

                <IconButton onClick={() => collapseSidebar()}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}

        </MenuItem>


        {!collapsed && (
          <Box
            sx={{
              marginBottom: '25px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img 
                src={MaleAvatar} 
                width='100px' 
                height='100px' 
                alt='user_avatar' 
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>

            <Box>
              <Typography>Name</Typography>
              <Typography>Role</Typography>
            </Box>
          </Box>
        )}
        

        <MenuItem
              icon={collapsed ? <GridViewOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              
              {!collapsed && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginLeft: '15px'
                }}
              >
                

                <IconButton>
                  <GridViewOutlinedIcon />
                </IconButton>
                
                <Typography variant='h4' color={colors.grey[100]} >
                  Dashboard
                </Typography>

              </Box>
            )}

        </MenuItem>

      </Menu>
    </Sidebar>

    </Box>
  )
}

export default Appbar
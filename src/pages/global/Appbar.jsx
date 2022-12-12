import { useState } from 'react'
import { ProSidebar,  Menu, MenuItem } from 'react-pro-sidebar'
import { Box, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { colorCodes } from '../../theme'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import Logo from '../../assets/Block-logo.png'
import LogoWhite from '../../assets/Block-logo-white.png'
import MaleAvatar from '../../assets/Male_Avatar.webp'
import LogoOnly from '../../assets/block-logo-only.png'
import 'react-pro-sidebar/dist/css/styles.css'

const Item = ({ title, to, icon, selected, setSelected }) => {

  const theme = useTheme()
  const colors = colorCodes(theme.palette.mode)

  return(
    <MenuItem
      active = { selected == title }
      style = {{ color: colors.grey[100] }}
      onClick = {() => setSelected(title)}
      icon = {icon}
    >

      <Typography>
        {title}
      </Typography>

      <Link to={to} />

    </MenuItem>
  )

}

const Appbar = () => {

  const theme = useTheme();
  const colors = colorCodes(theme.palette.mode);
  const [selected, setSelected] = useState('Dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      sx={{
        height: "100vh",
        display: 'flex',

        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },

        '& .pro-inner-item:hover': {
          color: `${colors.orangeVibrant[500]} !important`,
        },

        '& .pro-menu-item.active': {
          color: `${colors.orangeVibrant[500]} !important`,
        },
        
      }}
    >

    <ProSidebar
      collapsed={isCollapsed}
    >
      <Menu>
        <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <img src={LogoOnly} alt='Logo-only' /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              
              {!isCollapsed && (
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
                
              </Box>
            )}

        </MenuItem>


        {!isCollapsed && (
          <Box
            sx={{
              marginBottom: '25px'
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

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '10px'
              }}
            >
              <Typography 
                variant='h3' 
                sx={{
                  fontWeight: 'bold',
                  color: `${theme.palette.mode == 'dark' ? '#fff' : '#000'}`
                }} 
              >
                Anas
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  color: colors.greenVibrant[500],
                  fontWeight: 600
                }}
              >
                Admin
              </Typography>
            </Box>
          </Box>
        )}

        <Box paddingLeft={isCollapsed ? undefined : "10%"}>

          <Item 
            title='Dashboard'
            to='/'
            icon = {<GridViewOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            
          />

          <Item 
            title='Employees'
            to='/employees'
            icon = {<EngineeringOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item 
            title='Warehouses'
            to='/warehouses'
            icon = {<WarehouseOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item 
            title='Products'
            to='/products'
            icon = {<Inventory2OutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item 
            title='Add Employee'
            to='/add_employee'
            icon = {<PersonAddAlt1OutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      
      </Menu>
    </ProSidebar>

    </Box>
  )
}

export default Appbar
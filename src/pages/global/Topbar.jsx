import { Box, IconButton, useTheme, InputBase, Icon} from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, colorCodes } from '../../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Topbar = () => {

  const theme = useTheme();
  const colors = colorCodes(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box 
      sx={{
        display: 'flex',
        p: 2,
        justifyContent: 'end'
      }}
    >

      <Box
        sx={{
          display: 'flex',
        }}
      >

        <IconButton>
          {theme.palette.mode === 'dark' ? (
            <LightModeOutlinedIcon onClick={colorMode.toggleColorMode} />
          ) : (
            <DarkModeOutlinedIcon  onClick={colorMode.toggleColorMode} />
          )}
        </IconButton>

        <IconButton>
            <NotificationsOutlinedIcon />
        </IconButton>
            
        <IconButton>
             <SettingsOutlinedIcon />
        </IconButton>

        <IconButton>
            <PersonOutlinedIcon />
        </IconButton>

      </Box>

    </Box>
  )
}

export default Topbar
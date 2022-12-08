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

        {theme.palette.mode === 'dark' ?(
          <IconButton onClick={colorMode.toggleColorMode}>
            <LightModeOutlinedIcon /> 
          </IconButton>
        ) : (
          <IconButton onClick={colorMode.toggleColorMode}>
            <DarkModeOutlinedIcon /> 
          </IconButton>
        )}


      </Box>

    </Box>
  )
}

export default Topbar
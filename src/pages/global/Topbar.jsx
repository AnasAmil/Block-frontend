import {
  Box,
  IconButton,
  useTheme,
  InputBase,
  Icon,
  Menu,
  Button,
} from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, colorCodes } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { MenuItem } from "react-pro-sidebar";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Topbar = ({ isloggedin, setIsloggedin, userConnected }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const pathname = useLocation()

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Logout = () => {
    navigate("/");
    setIsloggedin(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        p: 2,
        justifyContent: "end",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        {theme.palette.mode === "dark" ? (
          <IconButton onClick={colorMode.toggleColorMode}>
            <LightModeOutlinedIcon />
          </IconButton>
        ) : (
          <IconButton onClick={colorMode.toggleColorMode}>
            <DarkModeOutlinedIcon />
          </IconButton>
        )}

        {isloggedin && (
          <>
            <IconButton
              onClick={handleMenu}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <PersonOutlinedIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem>
                <Button
                  component={Link}
                  variant="text"
                  sx={{
                    color: `${
                      theme.palette.mode == "dark" ? "white" : "black"
                    }`,
                    fontWeight: "bold",
                  }}
                  to={`/profile/${userConnected.id}`}
                >
                  Profile
                </Button>
              </MenuItem>
              <MenuItem>
                  <Button
                    onClick={Logout}
                    variant="text"
                    sx={{
                      color: `${
                        theme.palette.mode == "dark" ? "white" : "black"
                      }`,
                      fontWeight: "bold",
                    }}
                  >
                    Logout
                  </Button>
              </MenuItem>
            </Menu>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Topbar;

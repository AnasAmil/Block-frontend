import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import { colorCodes } from "../theme";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import axios from "axios";

const ActionCell = ({ id }) => {
  const theme = useTheme();
  const colors = colorCodes(theme.palette.mode);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  const deleteProduct = () => {
    axios.delete(`http://127.0.0.1:8001/apip/products/${id}`)
            .then(() => setOpen(false) )
    
  };

  return (
    <Stack direction="row" spacing={1}>
      <IconButton>
        <ModeEditOutlineOutlinedIcon sx={{ color: colors.greenVibrant[500] }} />
      </IconButton>

      <IconButton onClick={handleClickOpen}>
        <DeleteOutlineOutlinedIcon sx={{ color: colors.redVibrant[500] }} />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure you want to delete this product ?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Keep in mind that by deleting this Product you can't get it back !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}  color='secondary' sx={{ fontWeight: 'bold' }}>Cancel</Button>
          <Button onClick={deleteProduct} autoFocus variant='contained' color='error' sx={{ fontWeight: 'bold' }}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default ActionCell;

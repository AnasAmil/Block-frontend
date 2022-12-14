import React, { useState } from "react";
import {
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import { colorCodes } from "../theme";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import axios from "axios";
import DeleteDialaog from "./DeleteDialaog";
import EditModal from "./EditModal";

const ActionCell = ({ id }) => {
  const theme = useTheme();
  const colors = colorCodes(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false)

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

  const handleModal = () => {
    setModalOpen(!modalOpen)
  }


  return (
    <Stack direction="row" spacing={1}>

      <IconButton onClick={handleModal}>
        <ModeEditOutlineOutlinedIcon sx={{ color: colors.greenVibrant[500] }} />
      </IconButton>
      <EditModal open={modalOpen} modalHandler={handleModal} id={id}/>

      <IconButton onClick={handleClickOpen}>
        <DeleteOutlineOutlinedIcon sx={{ color: colors.redVibrant[500] }} />
      </IconButton>
      <DeleteDialaog open={open} closeDialog={handleClose} deleteProduct={deleteProduct} />
    </Stack>
  );
};

export default ActionCell;

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

const DeleteDialaog = ({ open, closeDialog, deleteProduct }) => {
  return (
    <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>Are you sure you want to delete this product ?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Keep in mind that by deleting this Product you can't get it back !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}  color='secondary' sx={{ fontWeight: 'bold' }}>Cancel</Button>
          <Button onClick={deleteProduct} autoFocus variant='contained' color='error' sx={{ fontWeight: 'bold' }}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default DeleteDialaog
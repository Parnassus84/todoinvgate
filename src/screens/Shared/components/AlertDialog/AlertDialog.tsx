import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
  showModal: boolean;
  isTodo: boolean;
  name?: string;
  confirm: () => void;
  handleClose: () => void;
}

export default function AlertDialog({
  showModal,
  handleClose,
  confirm,
  isTodo,
  name,
}: Props) {
  return (
    <Dialog
      open={showModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"     
    >
      <DialogTitle id="alert-dialog-title">
        {isTodo
          ? `¿Esta seguro de eliminar el TO-DO ${name}?`
          : `¿Esta seguro de eliminar la tarea ${name} de la lista?`}
      </DialogTitle>
      <DialogActions sx={{ paddingBottom: '16px', gap: '16px' }}>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={confirm} autoFocus variant="contained">
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

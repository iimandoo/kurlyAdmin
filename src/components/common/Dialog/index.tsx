import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

export interface Props {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

function AdminDialog(props: Props) {
  const { message, isOpen, onClose } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen}>
      <DialogTitle>{message}</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AdminDialog;

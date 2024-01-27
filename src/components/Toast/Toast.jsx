import React, { useEffect, useState } from 'react';
import { Snackbar } from '@mui/material';

const Toast = ({ error, onClose }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    onClose();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      message={error || 'Something went wrong!'}
    />
  );
};

export default Toast;

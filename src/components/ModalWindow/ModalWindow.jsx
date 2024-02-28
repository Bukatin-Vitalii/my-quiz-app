import { Modal } from '@mui/material';
import React from 'react';

const ModalWindow = ({ children, isOpen, handleCloseModal }) => (
  <Modal
    open={isOpen}
    onClose={handleCloseModal}
  >
    <>
      {children}
    </>
  </Modal>
);

export default ModalWindow;

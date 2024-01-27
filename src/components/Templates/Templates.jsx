import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import Quizzes from '../../pages/Quizzes/Quizzes';
import { CustomizedButton } from './styled';
import Toast from '../Toast/Toast';

const Templates = () => {
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [error, setError] = useState(null);

  const handleApiError = (error) => {
    setError(error.message || error);
  };

  const handleSidebarHidden = () => setSidebarHidden(!sidebarHidden);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      {sidebarHidden ? null : (
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
      )}
      <Grid item xs={sidebarHidden ? 12 : 9} style={{ position: 'relative' }}>
        <CustomizedButton
          type="button"
          onClick={handleSidebarHidden}
          sidebarHidden={sidebarHidden}
        >
          <span> {'<'} </span>
        </CustomizedButton>
        <Quizzes onApiError={handleApiError} />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
      <Toast error={error} onClose={() => setError(null)} /> {/* Используем Toast вместо AutohideSnackbar */}
    </Grid>
  );
};

export default Templates;

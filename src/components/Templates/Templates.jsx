import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import { CustomizedButton, CustomizedWrapper } from './styled';

const Templates = ({ handleInputChange }) => {
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const handleSidebarHidden = () => setSidebarHidden(!sidebarHidden);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      {sidebarHidden ? null : (
        <Grid item xs={3}>
          <Sidebar handleInputChange={handleInputChange} />
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
        <CustomizedWrapper>
          <Outlet />
        </CustomizedWrapper>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Templates;

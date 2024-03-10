import React from "react";
import Navbar from "../components/navbar";
import Map from "../components/map";
import Table from "../components/table"
import Grid from '@mui/material/Grid';

const home = () => {
  return (
    <>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} padding={2}>
          <Map />
        </Grid>
        <Grid item xs={6} md={5} marginTop={10} padding={3}>
            <Table/>
        </Grid>
      </Grid>
    </>
  );
};

export default home;

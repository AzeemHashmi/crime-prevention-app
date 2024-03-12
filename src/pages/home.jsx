import React from "react";
import Navbar from "../components/navbar";
import Map from "../components/map";
import Table from "../components/table"
import Grid from '@mui/material/Grid';

const home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Grid container spacing={2} style={{ height: "calc(100vh - 64px)" }}>
        <Grid item xs={12} md={7} lg={8}>
          <Map />
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
            <Table/>
        </Grid>
      </Grid>
    </>
  );
};

export default home;

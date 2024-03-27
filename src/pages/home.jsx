import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Map from "../components/map";
import Table from "../components/table"
import Grid from '@mui/material/Grid';

const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Grid container spacing={2} style={{ height: "calc(100vh - 64px)" }}>
        <Grid item xs={12} md={7} lg={7}>
          <Map />
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
            <Table data={data}/>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

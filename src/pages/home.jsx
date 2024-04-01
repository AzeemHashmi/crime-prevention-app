import React from "react";
import "../style/home.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';


const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Monitors Every Crime</h1>
          <div className="search-bar">
            <TextField
              id="filled-basic"
              label="Enter the address"
              variant="filled"
              size="small"
              sx={{ backgroundColor: "white" }}
            />
            <Button variant="contained">Search</Button>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="about-us-content-up">
          <h1>Who are we?</h1>
          <p>
            Eyes of Community is a public facing crime map and crime alert
            service. With Eyes of Community, its easier than ever to check crime
            anywhere in the United Kingdom. Our goal is to provide the most
            accurate and timely crime information to the public. As the most
            visited crime mapping website, Eyes of Community allows you to
            easily look up city and county crime data and reports all the way
            down to local neighborhood statistics.
          </p>
        </div>
        <div className="about-us-content-down">
          <div className="work">
          <Card variant="outlined">
            <h1>How it works?</h1>
            <p>
              We collect relevant crime data from police agencies and validated
              sources to plot it on a Google map. We also analyze crime trends
              in your neighborhood and allow you to search for crime near any
              address.
            </p>
            </Card>
          </div>
          <div className="trust">
            <Card><h1>Why Trust Eyes of Community</h1>
            <p>
              Eyes of Community is 100% independent. With free access to basic
              crime alerts we hope to encourage public trust, increase police
              transparency, and promote public safety.
            </p></Card>
          </div>
        </div>
      </section>
      <section className="contact-us">
  <div className="contact-us-content">
    <h1>Contact Us</h1>
    <form>
      <TextField
        id="name"
        label="Enter your name"
        variant="outlined"
        size="small"
        fullWidth
        margin="normal"
      />
      <TextField
        id="email"
        label="Enter your email"
        variant="outlined"
        size="small"
        fullWidth
        margin="normal"
      />
      <TextField
        id="message"
        label="Enter your message"
        variant="outlined"
        size="small"
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" type="submit" color="primary">
        Submit
      </Button>
    </form>
  </div>
</section>

      <section className="footer"><div>Copyright to Eyes of Community</div></section>
    </div>
  );
};

export default Home;

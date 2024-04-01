import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { blueGrey } from '@mui/material/colors';


const pages = ["Crime Map", "About Us", "News Events"];
const settings = ["Profile", "Logout"];

function Navbar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const pri = blueGrey['A700']

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <AdbIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            EYES OF COMMUNITY
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                color="inherit"
                component={Link}
                to={`/${page.toLowerCase().replace(" ", "-")}`}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button color="inherit" component={Link} to="/join-us">
            Join Us
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer}
      >
        <List>
          {pages.map((page) => (
            <ListItem
              key={page}
              button
              component={Link}
              to={`/${page.toLowerCase().replace(" ", "-")}`}
            >
              <ListItemText primary={page} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;

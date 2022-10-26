import { useContext, useState } from "react";
import { auth } from "../../../services/firebase";
import { signOut } from "firebase/auth";
import { UserContext } from "../../../contexts/UserContext";

import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

import "./Header.css";
import { ReactComponent as HamburgerIcon } from "../../../assets/Icons/HamburgerIcon.svg";
import { ReactComponent as LockIcon } from "../../../assets/Icons/LockIcon.svg";
import { ReactComponent as UnlockIcon } from "../../../assets/Icons/UnlockIcon.svg";
import { red } from "@mui/material/colors";

export default function Header(props) {
  const { user, username } = useContext(UserContext);

  const signOutNow = () => {
    signOut(auth);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="Header">
        <Toolbar>
          <IconButton
            onClick={props.toggleSidebar}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: red }}
          >
            <HamburgerIcon />
          </IconButton>
          <div className="title-block">
            <h1>
              <Link to="/">BULL METAL</Link>
            </h1>
            <h2>
              <Link to="/">INTERNAL TOOLS</Link>
            </h2>
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

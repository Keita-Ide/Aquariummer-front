import React, { FC, useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import fetch from "node-fetch";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// type HeaderValue = {
//   accountId: string;
//   firstName: string;
//   lastName: string;
//   chargePlan: string;
// };

// const InitialState: HeaderValue = {
//   accountId: "1000",
//   firstName: "井手",
//   lastName: "啓太",
//   chargePlan: "ペンギンプラン",
// };

type HeaderSampleValue = {
  companyId: number;
  companyName: string;
};

const InitialSampleState: HeaderSampleValue = {
  companyId: 1000,
  companyName: "井手株式会社",
};

const Header: FC = () => {
  const theme = useTheme();
  // const [headerData, setHeaderData] = useState<HeaderValue>(InitialState);
  const [headerSampleData, setHeaderSampleData] =
    useState<HeaderSampleValue>(InitialSampleState);
  const [myAccountOpen, setMyAccountOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleOpen = () => setMyAccountOpen(true);
  const handleClose = () => setMyAccountOpen(false);
  const handleMenuOpen = () => setMenuOpen(true);
  const handleMenuClose = () => setMenuOpen(false);

  const drawerWidth = 240;
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  useEffect(() => {
    const URL = "http://localhost:8080/api/aquariummer/user/getCompany";
    const data = {
      accountId: "1",
    };
    const aquariumInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
      body: JSON.stringify(data),
    };

    fetch(URL, aquariumInit)
      .then((res) => res.json())
      .then((json) => {
        // setHeaderData(JSON.parse(JSON.stringify(json)));
        setHeaderSampleData(JSON.parse(JSON.stringify(json)));
        console.log(JSON.parse(JSON.stringify(json)));
      });
  }, []);

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={menuOpen}
      >
        <DrawerHeader>
          <IconButton onClick={handleMenuClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Aquariummer
            </Typography>
            <IconButton onClick={handleOpen} aria-label="avator">
              <Avatar alt="noName" src="" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Modal
        open={myAccountOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {headerSampleData?.companyId}
            {headerSampleData?.companyName}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Header;

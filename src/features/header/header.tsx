import React, { FC, useState, useEffect } from "react";
import fetch from "node-fetch";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";

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

type HeaderValue = {
  accountId: string;
  firstName: string;
  lastName: string;
  chargePlan: string;
};

const InitialState: HeaderValue = {
  accountId: "1000",
  firstName: "井手",
  lastName: "啓太",
  chargePlan: "ペンギンプラン",
};

const Header: FC = () => {
  const [headerData, setHeaderData] = useState<HeaderValue>(InitialState);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const URL = "http://localhost:8080/api/aquariummer/getMyAccount";
    const data = [
      {
        accountId: "100000111",
      },
    ];
    const aquariumInit = {
      method: "POST",
      mode: "cors",
      cache: "default",
      body: JSON.stringify(data),
    };

    fetch(URL, aquariumInit)
      .then((res) => res.json())
      .then((json) => {
        setHeaderData(JSON.parse(JSON.stringify(json)));
        console.log(JSON.parse(JSON.stringify(json)));
      });
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
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
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {headerData?.accountId}
            {headerData?.firstName}
            {headerData?.lastName}
            {headerData?.chargePlan}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Header;

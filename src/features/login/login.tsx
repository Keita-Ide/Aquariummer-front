import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  height: 60,
  lineHeight: "60px",
}));

const Login: FC = () => {
  return (
    <Grid container spacing={2} marginTop={5} justifyContent="center">
      <Grid item xs={6}>
        <Box
          sx={{
            bgcolor: "background.default",
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 2,
          }}
        >
          <Grid item xs={4}>
            <Item>Firstname</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>middlename</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>lastname</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>plan</Item>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

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
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={6}>
        <Box
          sx={{
            p: 2,
            bgcolor: "background.default",
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 2,
          }}
        >
          {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
            <Item key={elevation} elevation={elevation}>
              {`elevation=${elevation}`}
            </Item>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

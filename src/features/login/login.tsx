import * as React from "react";
import fetch from "node-fetch";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const handleOnSubmit = () => {
  const URL = "http://localhost:8080/api/aquariummer/";
  const loginParams = {
    method: "POST",
    mode: "cors",
    cache: "default",
  };

  fetch(URL, loginParams)
    .then((res) => res.json())
    .then((json) => {
      console.log("success");
    });
};

interface State {
  amount: string;
  mailAddress: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const Login: React.FC = () => {
  const [values, setValues] = React.useState<State>({
    amount: "",
    mailAddress: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Grid container spacing={2} marginTop={5} justifyContent="center">
      <Grid item xs={3}>
        <Box
          sx={{
            bgcolor: "background.default",
            display: "grid",
            gridTemplateColumns: { md: "1fr" },
            gap: 2,
          }}
        >
          <Typography gutterBottom variant="h5" textAlign="center">
            Aquariummerにログイン
          </Typography>
          <Grid item xs={12}>
            <InputLabel>MailAddress</InputLabel>
            <TextField
              required
              fullWidth
              id="mailAddress"
              onChange={handleChange("mailAddress")}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              fullWidth
              id="password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <Button
            type="submit"
            href="/"
            variant="contained"
            color="success"
            onSubmit={handleOnSubmit}
          >
            ログイン
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import samplePicture from "../../images/samplePicture.jpg";

interface State {
  amount: string;
  mailAddress: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const aquariumDetail: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [values, setValues] = React.useState<State>({
    amount: "",
    mailAddress: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChangeText =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  return (
    <>
      <Grid container direction="row" justifyContent="flex-start" spacing={1}>
        <Grid>
          <Card sx={{ maxWidth: 600, maxHeight: 600, m: 5 }}>
            <CardMedia
              component="img"
              alt="aquarium"
              height="500"
              width="550"
              image={samplePicture}
            />
          </Card>
        </Grid>
        <Grid container direction="row" justifyContent="flex-start" spacing={1}>
          <Grid>
            <InputLabel>水槽名</InputLabel>
            <TextField
              required
              fullWidth
              id="mailAddress"
              onChange={handleChangeText("mailAddress")}
            />
          </Grid>
          <Grid>
            <InputLabel>水質</InputLabel>
            <TextField
              required
              fullWidth
              id="mailAddress"
              onChange={handleChangeText("mailAddress")}
            />
          </Grid>
          <Grid>
            <InputLabel>水槽サイズ</InputLabel>
            <TextField
              required
              fullWidth
              id="mailAddress"
              onChange={handleChangeText("mailAddress")}
            />
          </Grid>
          <Grid>
            <InputLabel>水槽の容量</InputLabel>
            <TextField
              required
              fullWidth
              id="mailAddress"
              onChange={handleChangeText("mailAddress")}
            />
          </Grid>
          <Grid>
            <InputLabel>魚</InputLabel>
            <TextField
              required
              fullWidth
              id="mailAddress"
              onChange={handleChangeText("mailAddress")}
            />
          </Grid>
          <Grid>
            <InputLabel>設備</InputLabel>
            <TextField
              required
              fullWidth
              id="mailAddress"
              onChange={handleChangeText("mailAddress")}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default aquariumDetail;

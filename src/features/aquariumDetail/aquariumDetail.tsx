import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import samplePicture from "../../images/samplePicture.jpg";

interface State {
  aquariumName: string;
  aquariumWater: string;
  aquariumSize: string;
  aquariumWaterSize: string;
  fishNamesNumbers: string;
  aquariumEquipment: string;
}

const aquariumDetail: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [values, setValues] = React.useState<State>({
    aquariumName: "",
    aquariumWater: "",
    aquariumSize: "",
    aquariumWaterSize: "",
    fishNamesNumbers: "",
    aquariumEquipment: "",
  });
  const handleChangeText =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        m={5}
        sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        <Card sx={{ maxWidth: 600, maxHeight: 600 }}>
          <CardMedia
            component="img"
            alt="aquarium"
            height="500"
            width="550"
            image={samplePicture}
          />
        </Card>
        <Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            spacing={1}
          >
            <Grid container item>
              <Grid item xs={4}>
                <InputLabel>水槽名</InputLabel>
                <TextField
                  required
                  id="aquariumName"
                  onChange={handleChangeText("aquariumName")}
                />
              </Grid>
              <Grid item xs={4}>
                <InputLabel>水質</InputLabel>
                <TextField
                  required
                  id="aquariumWater"
                  onChange={handleChangeText("aquariumWater")}
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs={4}>
                <InputLabel>水槽サイズ</InputLabel>
                <TextField
                  required
                  id="aquariumSize"
                  onChange={handleChangeText("aquariumSize")}
                />
              </Grid>
              <Grid item xs={4}>
                <InputLabel>水槽の容量</InputLabel>
                <TextField
                  required
                  id="aquariumWaterSize"
                  onChange={handleChangeText("aquariumWaterSize")}
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs={4}>
                <InputLabel>魚</InputLabel>
                <TextField
                  required
                  id="fishNamesNumbers"
                  onChange={handleChangeText("fishNamesNumbers")}
                />
              </Grid>
              <Grid item xs={4}>
                <InputLabel>設備</InputLabel>
                <TextField
                  required
                  id="aquariumEquipment"
                  onChange={handleChangeText("aquariumEquipment")}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default aquariumDetail;

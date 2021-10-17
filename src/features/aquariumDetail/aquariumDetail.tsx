import * as React from "react";
import fetch from "node-fetch";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import samplePicture from "../../images/samplePicture.jpg";

type AquariumDetailValue = {
  aquariumId: string;
  aquariumName: string;
  aquariumWater: string;
  aquariumSize: string;
  aquariumWaterSize: string;
  fishNamesNumbers: [
    {
      fishName: string;
      fishNumber: number;
    }
  ];
  aquariumEquipment: {
    heater: string;
    filter: string;
    soil: string;
    sand: string;
    feeding: string;
    chemical: string;
  };
};

const InitialState: AquariumDetailValue = {
  aquariumId: "未設定",
  aquariumName: "未設定",
  aquariumWater: "未設定",
  aquariumSize: "未設定",
  aquariumWaterSize: "未設定",
  fishNamesNumbers: [
    {
      fishName: "未設定",
      fishNumber: 0,
    },
  ],
  aquariumEquipment: {
    heater: "未設定",
    filter: "未設定",
    soil: "未設定",
    sand: "未設定",
    feeding: "未設定",
    chemical: "未設定",
  },
};

const aquariumDetail: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [values, setValues] = React.useState<AquariumDetailValue>(InitialState);
  const handleChangeText =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    const URL = "http://localhost:8080/api/aquariummer/getAquarium";
    const aquariumInit = {
      method: "POST",
      mode: "cors",
      cache: "default",
      params: {
        aquariumId: values.aquariumId,
      },
    };

    fetch(URL, aquariumInit)
      .then((res) => res.json())
      .then((json) => {
        setValues(JSON.parse(JSON.stringify(json)));
        console.log(JSON.parse(JSON.stringify(json)));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            height="520"
            width="500"
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
            <Grid container item columnGap={3}>
              <Grid item xs={5}>
                <InputLabel>水槽名</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="aquariumName"
                  value={values?.aquariumName}
                  onChange={handleChangeText("aquariumName")}
                />
              </Grid>
              <Grid item xs={5}>
                <InputLabel>水質</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="aquariumWater"
                  value={values?.aquariumWater}
                  onChange={handleChangeText("aquariumWater")}
                />
              </Grid>
            </Grid>
            <Grid container item columnGap={3}>
              <Grid item xs={5}>
                <InputLabel>水槽サイズ(cm)</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="aquariumSize"
                  value={values?.aquariumSize}
                  onChange={handleChangeText("aquariumSize")}
                />
              </Grid>
              <Grid item xs={5}>
                <InputLabel>水槽の容量(L)</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="aquariumWaterSize"
                  value={values?.aquariumWaterSize}
                  onChange={handleChangeText("aquariumWaterSize")}
                />
              </Grid>
            </Grid>
            <Grid container item columnGap={3}>
              <Grid item xs={5}>
                <InputLabel>魚種</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="fishNamesKinds"
                  value={values?.fishNamesNumbers[0].fishName}
                  onChange={handleChangeText("fishNamesKinds")}
                />
              </Grid>
              <Grid item xs={5}>
                <InputLabel>魚数(匹)</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="fishNamesNumbers"
                  value={values?.fishNamesNumbers[0].fishNumber}
                  onChange={handleChangeText("fishNamesNumbers")}
                />
              </Grid>
            </Grid>
            <Grid container item columnGap={3}>
              <Grid item xs={5}>
                <InputLabel>ヒーター</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="heater"
                  value={values?.aquariumEquipment.heater}
                  onChange={handleChangeText("aquariumEquipment")}
                />
              </Grid>
              <Grid item xs={5}>
                <InputLabel>フィルター</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="filter"
                  value={values?.aquariumEquipment.filter}
                  onChange={handleChangeText("filter")}
                />
              </Grid>
            </Grid>
            <Grid container item columnGap={3}>
              <Grid item xs={5}>
                <InputLabel>底床剤</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="soil"
                  value={values?.aquariumEquipment.soil}
                  onChange={handleChangeText("soil")}
                />
              </Grid>
              <Grid item xs={5}>
                <InputLabel>底砂</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="sand"
                  value={values?.aquariumEquipment.sand}
                  onChange={handleChangeText("sand")}
                />
              </Grid>
            </Grid>
            <Grid container item columnGap={3}>
              <Grid item xs={5}>
                <InputLabel>飼料</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="feeding"
                  value={values?.aquariumEquipment.feeding}
                  onChange={handleChangeText("feeding")}
                />
              </Grid>
              <Grid item xs={5}>
                <InputLabel>薬品</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="chemical"
                  value={values?.aquariumEquipment.chemical}
                  onChange={handleChangeText("chemical")}
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

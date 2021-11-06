/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import { useLocation } from "react-router-dom";
import fetch from "node-fetch";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import samplePicture from "../../images/samplePicture.jpg";

type AquariumDetailValue = {
  accountId: number;
  aquariumId: number;
  aquariumName: string;
  aquariumWaterType: string;
  aquariumWaterSize: string;
  aquariumSize: number;
  filterBodyId: string;
  filterBodyName: string;
  filterMediumId: number;
  filterMediumName: string;
  soilId: number;
  soilName: string;
  heaterId: number;
  heaterName: string;
  coolerId: number;
  coolerName: string;
  lightId: number;
  lightName: string;
  waterTemplatureGaugeId: number;
  waterTemplatureGaugeNmae: string;
  aerationId: number;
  aerationName: string;
  circurationpumpId: number;
  circurationpumpName: string;
  aquariumFish: [
    {
      fishId: number;
      fishName: string;
      fishScientificName: string;
      fishNumber: number;
    }
  ];
  aquariumPlant: [
    {
      plantId: number;
      plantName: string;
      plantScientificName: string;
      plantNumber: number;
    }
  ];
  aquariumEquipment: [
    {
      equipmentId: number;
      equipmentName: string;
    }
  ];
  aquariumChemical: [
    {
      chemicalId: number;
      chemicalName: string;
    }
  ];
};

const initialState: AquariumDetailValue = {
  accountId: 1,
  aquariumId: 1,
  aquariumName: "",
  aquariumWaterType: "",
  aquariumWaterSize: "",
  aquariumSize: 0,
  filterBodyId: "",
  filterBodyName: "",
  filterMediumId: 0,
  filterMediumName: "",
  soilId: 0,
  soilName: "",
  heaterId: 0,
  heaterName: "",
  coolerId: 0,
  coolerName: "",
  lightId: 0,
  lightName: "",
  waterTemplatureGaugeId: 0,
  waterTemplatureGaugeNmae: "",
  aerationId: 0,
  aerationName: "",
  circurationpumpId: 0,
  circurationpumpName: "",
  aquariumFish: [
    {
      fishId: 0,
      fishName: "",
      fishScientificName: "",
      fishNumber: 0,
    },
  ],
  aquariumPlant: [
    {
      plantId: 0,
      plantName: "",
      plantScientificName: "",
      plantNumber: 0,
    },
  ],
  aquariumEquipment: [
    {
      equipmentId: 0,
      equipmentName: "",
    },
  ],
  aquariumChemical: [
    {
      chemicalId: 0,
      chemicalName: "",
    },
  ],
};

const aquariumDetail: React.FC = () => {
  const location = useLocation();
  const [resultSet] = React.useState<any>(location.state);
  const [values, setValues] = React.useState<AquariumDetailValue>(initialState);
  const handleChangeText =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  React.useEffect(() => {
    console.log("History参照用がよばれました");
    // History参照用
    const URL = "http://localhost:8080/api/aquariummer/getAquarium";
    const requestParams = {
      aquariumId: resultSet.aquariumId || 0,
    };
    const aquariumInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
      body: JSON.stringify(requestParams),
    };

    fetch(URL, aquariumInit)
      .then((res) => res.json())
      .then((json) => {
        setValues(JSON.parse(JSON.stringify(json)));
        console.log(JSON.parse(JSON.stringify(json)));
      });
  }, [resultSet]);

  React.useEffect(() => {
    console.log("AquariumDetail更新用がよばれました");
    // AquariumDetail更新用
    const URL = "http://localhost:8080/api/aquariummer/updateAquariumDetail";
    const requestParams = {
      accountId: values.accountId,
      aquariumId: values.aquariumId,
      aquariumWaterType: values.aquariumWaterType,
      aquariumWaterSize: values.aquariumWaterSize,
      aquariumSize: values.aquariumSize,
      filterBodyId: values.filterBodyId,
      filterMediumId: values.filterMediumId,
      soilId: values.soilId,
      heaterId: values.heaterId,
      coolerId: values.coolerId,
      lightId: values.lightId,
      waterTemplatureGaugeId: values.waterTemplatureGaugeId,
      aerationId: values.aerationId,
      circurationpumpId: values.circurationpumpId,
      aquariumFish: [
        {
          fishId: 0,
          fishNumber: 0,
        },
      ],
      aquariumPlant: [
        {
          plantId: 0,
          plantNumber: 0,
        },
      ],
      aquariumEquipment: [
        {
          equipmentId: 0,
        },
      ],
      aquariumChemical: [
        {
          chemicalId: 0,
        },
      ],
    };
    const fetchParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
      body: JSON.stringify(requestParams),
    };

    // fetch(URL, fetchParams);
  }, [values]);

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
                  id="aquariumWaterType"
                  value={values?.aquariumWaterType}
                  onChange={handleChangeText("aquariumWaterType")}
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
                  id="aquariumFish"
                  value={values?.aquariumFish[0].fishName}
                  onChange={handleChangeText("aquariumFish")}
                />
              </Grid>
              <Grid item xs={5}>
                <InputLabel>魚数(匹)</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="aquariumFish"
                  value={values?.aquariumFish[0].fishNumber}
                  onChange={handleChangeText("aquariumFish")}
                />
              </Grid>
            </Grid>
            <Grid container item columnGap={3}>
              <Grid item xs={5}>
                <InputLabel>ヒーター</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="heaterName"
                  value={values?.heaterName}
                  onChange={handleChangeText("heaterName")}
                />
              </Grid>
              <Grid item xs={5}>
                <InputLabel>フィルター</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="filterBodyName"
                  value={values?.filterBodyName}
                  onChange={handleChangeText("filterBodyName")}
                />
              </Grid>
            </Grid>
            <Grid container item columnGap={3}>
              <Grid item xs={5}>
                <InputLabel>底床剤</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="soilName"
                  value={values?.soilName}
                  onChange={handleChangeText("soilName")}
                />
              </Grid>
              <Grid item xs={5}>
                <InputLabel>底砂</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="soilName"
                  value={values?.soilName}
                  onChange={handleChangeText("soilName")}
                />
              </Grid>
            </Grid>
            <Grid container item columnGap={3}>
              <Grid item xs={5}>
                <InputLabel>エアレーション</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="aerationName"
                  value={values?.aerationName}
                  onChange={handleChangeText("aerationName")}
                />
              </Grid>
              <Grid item xs={5}>
                <InputLabel>循環装置</InputLabel>
                <TextField
                  fullWidth
                  required
                  id="circurationpumpName"
                  value={values?.circurationpumpName}
                  onChange={handleChangeText("circurationpumpName")}
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

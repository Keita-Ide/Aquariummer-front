import React, { FC, useState, useEffect } from "react";
import fetch from "node-fetch";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Alert from "@mui/material/Alert";
import Grid from "@material-ui/core/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

type AquariumValue = {
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

const InitialState: AquariumValue = {
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

const Aquarium: FC = () => {
  const [aquariumData, setAquariumData] = useState<AquariumValue>(InitialState);
  const [alertFlug, setAlertFlug] = useState(false);

  // 不要なレンダリングを避ける
  useEffect(() => {
    const URL = "http://localhost:8080/api/aquariummer/";
    const aquariumInit = {
      method: "GET",
      mode: "cors",
      cache: "default",
    };

    fetch(URL, aquariumInit)
      .then((res) => res.json())
      .then((json) => {
        setAquariumData(JSON.parse(JSON.stringify(json)));
        console.log(JSON.parse(JSON.stringify(json)));
      });
  }, []);

  return (
    <>
      {alertFlug && (
        <Alert
          onClose={() => {
            setAlertFlug(false);
          }}
          severity="success"
        >
          This is a success alert — check it out!
        </Alert>
      )}
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea
          onClick={() => {
            setAlertFlug(true);
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="aquarium picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {aquariumData?.aquariumName}
            </Typography>
            <Stack direction="row" justifyContent="center" spacing={1}>
              <Grid margin="auto">
                <Chip label={aquariumData?.aquariumWater} />
                <Chip label={aquariumData?.aquariumSize} />
                <Chip label={aquariumData?.aquariumWaterSize} />
                <Chip label={aquariumData?.fishNamesNumbers[0]?.fishName} />
                <Chip label={aquariumData?.fishNamesNumbers[0]?.fishNumber} />
                <Chip label={aquariumData?.aquariumEquipment?.heater} />
                <Chip label={aquariumData?.aquariumEquipment?.filter} />
                <Chip label={aquariumData?.aquariumEquipment?.soil} />
                <Chip label={aquariumData?.aquariumEquipment?.sand} />
                <Chip label={aquariumData?.aquariumEquipment?.soil} />
                <Chip label={aquariumData?.aquariumEquipment?.feeding} />
                <Chip label={aquariumData?.aquariumEquipment?.chemical} />
              </Grid>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Aquarium;

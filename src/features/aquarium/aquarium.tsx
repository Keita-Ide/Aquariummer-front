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
import samplePicture from "../../images/samplePicture.jpg";

type AquariumValue = [
  {
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
  }
];

const InitialState: AquariumValue = [
  {
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
  },
];

const Aquarium: FC = () => {
  const [aquariumData, setAquariumData] = useState<AquariumValue>(InitialState);
  const [alertFlug, setAlertFlug] = useState(false);

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
          It's under development! Have fun!
        </Alert>
      )}
      <Grid container direction="row" justifyContent="flex-start" spacing={1}>
        {aquariumData.map((aquariumData, index: number) => (
          <Card sx={{ maxWidth: 345, m: 1 }} key={index}>
            <CardActionArea
              onClick={() => {
                // Transit to Aquarium-Detail-Screen. It doesn't exist now, so I temporally show aleart.
                setAlertFlug(true);
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={samplePicture}
                alt="aquarium picture"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {aquariumData?.aquariumName}
                </Typography>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  spacing={1}
                >
                  <Grid>
                    <Chip label={aquariumData?.aquariumWater} />
                    <Chip label={aquariumData?.aquariumSize + "cm水槽"} />
                    <Chip label={aquariumData?.aquariumWaterSize + "L"} />
                    <Chip label={aquariumData?.fishNamesNumbers[0]?.fishName} />
                    <Chip
                      label={
                        aquariumData?.fishNamesNumbers[0]?.fishNumber + "匹"
                      }
                    />
                    <Chip label={aquariumData?.aquariumEquipment?.heater} />
                    <Chip label={aquariumData?.aquariumEquipment?.filter} />
                    <Chip label={aquariumData?.aquariumEquipment?.soil} />
                    <Chip label={aquariumData?.aquariumEquipment?.sand} />
                    <Chip label={aquariumData?.aquariumEquipment?.soil} />
                    <Chip label={aquariumData?.aquariumEquipment?.feeding} />
                    <Chip label={aquariumData?.aquariumEquipment?.chemical} />
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default Aquarium;

import React from "react";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import PaperInformation from "../components/PaperInformation";
import LocationInformation from "../components/LocationInformation";
import Lenguages from "../components/Lenguages";
import { isMobile } from 'react-device-detect';

const Description = (props) => {
  const { userData, userLanguages } = props;
  const { bio } = userData;

  return (
    <>
      <Stack
        sx={{
          justifyContent: "center",
          marginLeft: isMobile ? '10px !important' : '0px',
        }}
      >
        {bio != null ? (
          <Typography sx={{ fontFamily: "Courier New" }} variant="body1">
            {bio}
          </Typography>
        ) : (
          <Typography sx={{ fontFamily: "Courier New" }} variant="body1">
            This user dont have bio information
          </Typography>
        )}
      </Stack>
      {userLanguages.length ? (
        <Lenguages userLanguages={userLanguages} />
      ) : (
        <></>
      )}
      <PaperInformation userData={userData} />
      <LocationInformation userData={userData}></LocationInformation>
    </>
  );
};

export default Description;

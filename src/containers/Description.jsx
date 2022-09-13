import React from "react";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import PaperInformation from "../components/PaperInformation";
import LocationInformation from "../components/LocationInformation";

const Description = (props) => {
  const { userData } = props;
  const { bio } = userData;

  return (
    <>
      <Stack>
        {bio != null ? (
          <Typography>{bio}</Typography>
        ) : (
          <Typography>This user dont have bio information</Typography>
        )}
      </Stack>
      <PaperInformation userData={userData} />
      <LocationInformation userData={userData}></LocationInformation>
    </>
  );
};

export default Description;

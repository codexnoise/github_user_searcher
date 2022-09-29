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
      <Stack
        sx={{
          justifyContent: "center",
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
      <PaperInformation userData={userData} />
      <LocationInformation userData={userData}></LocationInformation>
    </>
  );
};

export default Description;

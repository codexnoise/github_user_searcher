import React from "react";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import PaperInformation from "../components/PaperInformation";

const Description = (props) => {
  const { userData } = props;
  const { bio } = userData;

  return (
    <>
      <Stack>
        <Typography>
          {bio != null ? (
            <Typography>{bio}</Typography>
          ) : (
            <Typography>This user dont have bio information</Typography>
          )}
        </Typography>
      </Stack>
      <PaperInformation userData={userData} />
      {/* <LocationInformation></LocationInformation> */}
    </>
  );
};

export default Description;

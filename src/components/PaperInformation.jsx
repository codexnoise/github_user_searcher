import React from "react";
import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { isMobile } from 'react-device-detect';

const PaperInformation = (props) => {
  const { userData } = props;
  const { public_repos, followers, following } = userData;

  return (
    <Paper eleveation={3}>
      <Stack
        spacing={3}
        direction={isMobile ? "column" : "row"}
        sx={{ justifyContent: "space-evenly", margin: "20px" }}
      >
        <Stack>
          <Typography sx={{ fontFamily: "Courier New" }} variant="h5">
            Repos
          </Typography>
          <Typography sx={{ fontFamily: "Courier New" }} variant="h6">
            {public_repos}
          </Typography>
        </Stack>
        <Stack>
          <Typography sx={{ fontFamily: "Courier New" }} variant="h5">
            Followers
          </Typography>
          <Typography sx={{ fontFamily: "Courier New" }} variant="h6">
            {followers}
          </Typography>
        </Stack>
        <Stack>
          <Typography sx={{ fontFamily: "Courier New" }} variant="h5">
            Following
          </Typography>
          <Typography sx={{ fontFamily: "Courier New" }} variant="h6">
            {following}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PaperInformation;

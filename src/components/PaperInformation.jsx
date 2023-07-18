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
        spacing={isMobile ? 0 : 3}
        direction={isMobile ? "column" : "row"}
        sx={{ justifyContent: "space-evenly", marginLeft: "0px 0px 0px 10px" }}
      >
        <Stack direction = {isMobile ? 'row' : 'column'}>
          <Typography sx={{ fontFamily: "Courier New" }} variant="h5">
            Repos 
          </Typography>
          <Typography sx={{ fontFamily: "Courier New", marginLeft: isMobile ? '12px' : '0'}} variant="h6">
            {public_repos}
          </Typography>
        </Stack>
        <Stack direction = {isMobile ? 'row' : 'column' }>
          <Typography sx={{ fontFamily: "Courier New" }} variant="h5">
            Followers
          </Typography>
          <Typography sx={{ fontFamily: "Courier New", marginLeft: isMobile ? '12px' : '0' }} variant="h6">
            {followers}
          </Typography>
        </Stack>
        <Stack direction = {isMobile ? 'row' : 'column'}> 
          <Typography sx={{ fontFamily: "Courier New" }} variant="h5">
            Following
          </Typography>
          <Typography sx={{ fontFamily: "Courier New", marginLeft: isMobile ? '12px' : '0' }} variant="h6">
            {following}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PaperInformation;

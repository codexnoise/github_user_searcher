import React from "react";
import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const PaperInformation = (props) => {
  const { userData } = props;
  const { public_repos, followers, following } = userData;

  return (
    <Paper eleveation={3}>
      <Stack>
        <Stack>
          <Typography>Repos</Typography>
          <Typography>{public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography>Followers</Typography>
          <Typography>{followers}</Typography>
        </Stack>
        <Stack>
          <Typography>Following</Typography>
          <Typography>{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PaperInformation;

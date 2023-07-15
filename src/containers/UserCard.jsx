import React from "react";
import { Grid, CardMedia, Stack } from "@mui/material";
import Information from "../components/Information";
import Description from "../containers/Description";
import { isMobile } from 'react-device-detect';

const UserCard = (props) => {
  const { userData, userLanguages } = props;
  const { avatar_url } = userData;

  return (
    <Grid container spacing={2} sx={{ marginTop: "15px", backgroundColor: 'red'}}>
      <Grid item xs={isMobile ? 12 : 3} sx={{ backgroundColor: 'green'}}>
        <CardMedia
          component="img"
          image={avatar_url}
          alt="Github User Avatar"
          sx={{
            borderRadius: "50%",
          }}
        />
      </Grid>
      <Grid item xs={isMobile ? 12 : 9} sx={{ backgroundColor: 'yellow'}}> 
        <Stack
          direction="column"
          spacing={1}
          sx={{
            margin: "30px",
          }}
        >
          <Information userData={userData} />
          <Description userData={userData} userLanguages={userLanguages} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default UserCard;

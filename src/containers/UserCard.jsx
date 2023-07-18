import React from "react";
import { Grid, CardMedia, Stack } from "@mui/material";
import Information from "../components/Information";
import Description from "../containers/Description";
import { isMobile } from 'react-device-detect';

const UserCard = (props) => {
  const { userData, userLanguages } = props;
  const { avatar_url } = userData;

  return (
    <Grid container spacing={2} sx={{ marginTop: "0px"}}>
      <Grid item xs={isMobile ? 12 : 3} sx={{display: 'flex', justifyContent: 'center',}}>
        <CardMedia
          component="img"
          image={avatar_url}
          alt="Github User Avatar"
          sx={{
            borderRadius: "50%",
            maxWidth: isMobile ? '150px' : '300px',
            maxHeight: isMobile ? '150px' : '300px',
          }}
        />
      </Grid>
      <Grid item xs={isMobile ? 12 : 9} sx={{ padding: "0px !important"}}> 
        <Stack
          direction="column"
          spacing={1}
          sx={{
            margin: isMobile ? "0px" : "30px",
            padding: '0',
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

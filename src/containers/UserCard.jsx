import React from "react";
import { Grid, CardMedia } from "@mui/material";
import Information from "../components/Information";

const UserCard = (props) => {
  const { userData } = props;
  const { avatar_url } = userData;

  return (
    <Grid container>
      <Grid item xs={3}>
        <CardMedia
          component="img"
          image={avatar_url}
          alt="Github User Avatar"
        />
      </Grid>
      <Grid item xs={9}>
        <Information userData={userData} />
        {/* <Description /> */}
      </Grid>
    </Grid>
  );
};

export default UserCard;

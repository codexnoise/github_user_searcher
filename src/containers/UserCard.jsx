import React from "react";
import { Grid, CardMedia } from "@mui/material";
import Information from "../components/Information";
import Description from "../containers/Description";

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
      </Grid>
      <Description userData={userData} />
    </Grid>
  );
};

export default UserCard;

import React from "react";
import { Grid, CardMedia, Stack } from "@mui/material";
import Information from "../components/Information";
import Description from "../containers/Description";

const UserCard = (props) => {
  const { userData } = props;
  const { avatar_url } = userData;

  return (
    <Grid container spacing={2} sx={{ marginTop: "15px" }}>
      <Grid item xs={3}>
        <CardMedia
          component="img"
          image={avatar_url}
          alt="Github User Avatar"
          sx={{
            borderRadius: "50%",
            marginLeft: "10px",
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack
          direction="column"
          spacing={1}
          sx={{
            margin: "30px",
          }}
        >
          <Information userData={userData} />
          <Description userData={userData} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default UserCard;

import React from "react";
import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";

const LocationInformation = (props) => {
  const { userData } = props;
  const { location, twitter_username, blog, company } = userData;

  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack>
          <LocationOnIcon />
          {location !== null ? (
            <Typography>{location}</Typography>
          ) : (
            <Typography>Not avaible</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <TwitterIcon />
          {twitter_username !== null ? (
            <Typography>{`@${twitter_username}`}</Typography>
          ) : (
            <Typography>Not avaible</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <LanguageIcon />
          {blog !== null && blog !== "" ? (
            <Typography>{blog}</Typography>
          ) : (
            <Typography>Not avaible</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <BusinessIcon />
          {company !== null ? (
            <Typography>{company}</Typography>
          ) : (
            <Typography>Not avaible</Typography>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;

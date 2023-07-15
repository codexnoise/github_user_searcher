import React from "react";
import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";
import { isMobile } from 'react-device-detect';

const LocationInformation = (props) => {
  const { userData } = props;
  const { location, twitter_username, blog, company } = userData;

  return (
    <Grid container spacing={2} sx={{ marginTop: "15px" }}>
      <Grid item xs={isMobile ? 12 : 6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon />
          {location !== null ? (
            <Typography sx={{ fontFamily: "Courier New" }}>
              {location}
            </Typography>
          ) : (
            <Typography x={{ fontFamily: "Courier New" }}>
              Not avaible
            </Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={isMobile ? 12 : 6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon />
          {twitter_username !== null ? (
            <Typography
              sx={{ fontFamily: "Courier New" }}
            >{`@${twitter_username}`}</Typography>
          ) : (
            <Typography sx={{ fontFamily: "Courier New" }}>
              Not avaible
            </Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={isMobile ? 12 : 6}>
        <Stack direction="row" spacing={2}>
          <LanguageIcon />
          {blog !== null && blog !== "" ? (
            <a target="_blank" href={blog}>
              <Typography sx={{ fontFamily: "Courier New" }}>{blog}</Typography>
            </a>
          ) : (
            <Typography sx={{ fontFamily: "Courier New" }}>
              Not avaible
            </Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={isMobile ? 12 : 6}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          {company !== null ? (
            <Typography sx={{ fontFamily: "Courier New" }}>
              {company}
            </Typography>
          ) : (
            <Typography sx={{ fontFamily: "Courier New" }}>
              Not avaible
            </Typography>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;

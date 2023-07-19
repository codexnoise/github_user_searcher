import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import joinedDate from "../services/formaters";
import { isMobile } from 'react-device-detect';

const Information = (props) => {
  const { userData } = props;
  const { name, login, created_at } = userData;
  return (
    <>
      <Stack direction={isMobile ? "column" : "row"} sx={{ justifyContent: "space-between", marginLeft: '10px' }}>
        <Typography sx={{ fontFamily: "Courier New" }} variant="h4">
          {name}
        </Typography>
        {isMobile ? (
          <Typography
            sx={{ fontFamily: "Courier New" }}
            variant="subtitle1"
          >{`@${login}`}</Typography>
        ) : (
          <Typography sx={{ fontFamily: "Courier New" }} variant="caption"> 
            {joinedDate(created_at)}
          </Typography>
        )}
      </Stack>
      {isMobile ? (
        <Typography sx={{ fontFamily: "Courier New", marginLeft: '10px !important' }} variant="caption"> 
          {joinedDate(created_at)}
        </Typography>
        ) : (
        <Typography
          sx={{ fontFamily: "Courier New", marginLeft: '10px' }}
          variant="subtitle1"
        >{`@${login}`}</Typography>
      )}
    </>
  );
};

export default Information;

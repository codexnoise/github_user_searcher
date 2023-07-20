import React from "react";
import { Stack, Typography } from "@mui/material";

const UserNotFound = () => {
  return (
    <>
      <Stack
        direction="column"
        spacing={1}
        sx={{
          margin: "50px",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontFamily: "Courier New", fontWeight: 'bold' }} variant="h1">
          404 
        </Typography>
        <Typography sx={{ fontFamily: "Courier New", fontWeight: 'bold', }} variant="h6">
          developer not found
        </Typography>
      </Stack>
    </>
  );
};

export default UserNotFound;

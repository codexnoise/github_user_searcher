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
        }}
      >
        <Typography variant="h4">404 User Not Found</Typography>
      </Stack>
    </>
  );
};

export default UserNotFound;

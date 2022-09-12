import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const Information = (props) => {
  const { userData } = props;
  const { name, login, created_at } = userData;
  return (
    <>
      <Stack>
        <Typography>{name}</Typography>
        <Typography>{created_at}</Typography>
      </Stack>
      <Typography>{login}</Typography>
    </>
  );
};

export default Information;

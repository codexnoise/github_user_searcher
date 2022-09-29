import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import joinedDate from "../services/formaters";

const Information = (props) => {
  const { userData } = props;
  const { name, login, created_at } = userData;
  return (
    <>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Typography sx={{ fontFamily: "Courier New" }} variant="h4">
          {name}
        </Typography>
        <Typography sx={{ fontFamily: "Courier New" }} variant="subtitle2">
          {joinedDate(created_at)}
        </Typography>
      </Stack>
      <Typography
        sx={{ fontFamily: "Courier New" }}
        variant="caption"
      >{`@${login}`}</Typography>
    </>
  );
};

export default Information;

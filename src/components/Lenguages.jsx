import { Typography } from "@mui/material";
import React from "react";

const Lenguages = (props) => {
  const { userLanguages } = props;

  const lenguages = "- ".concat(userLanguages.join(", "));

  return (
    <Typography sx={{ fontFamily: "Courier New" }} variant="h6">
      {` ${lenguages}`}
    </Typography>
  );
};

export default Lenguages;

//jest & react-testing-library

import React from "react";
import { Stack, TextField, IconButton } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

const Searcher = () => {
  return (
    <Stack
      direction="row"
      sx={{
        marginTop: "30px",
        width: "80%",
      }}
    >
      <TextField
        id="outlined-based"
        label="Github User"
        variant="outlined"
        placeholder="octocat"
        size="small"
        sx={{
          width: "90%",
        }}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchSharpIcon />
            </IconButton>
          ),
        }}
      ></TextField>
    </Stack>
  );
};

export default Searcher;

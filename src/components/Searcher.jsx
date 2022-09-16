import React from "react";
import { Stack, TextField, IconButton } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useState } from "react";

const Searcher = (props) => {
  const { setinputUser } = props;

  const [valueInput, setValueInput] = useState("");

  const onSearchValueChange = () => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };

  const handleSubmit = () => {
    setinputUser(valueInput);
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

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
        value={valueInput}
        onChange={onSearchValueChange}
        onKeyPress={handleKeypress}
        sx={{
          width: "90%",
        }}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSubmit}>
              <SearchSharpIcon />
            </IconButton>
          ),
        }}
      ></TextField>
    </Stack>
  );
};

export default Searcher;

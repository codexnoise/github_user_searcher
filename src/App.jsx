import React from "react";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";
import { useState, useEffect } from "react";
import getGithubUser from "./services/users";
import { ContactSupport } from "@mui/icons-material";

const App = () => {
  const [inputUser, setinputUser] = useState("octocat");
  const [userData, setUserData] = useState({});

  const gettingUser = async (user) => {
    const userRes = await getGithubUser(user);

    if (inputUser === "octocat") {
      localStorage.setItem("octocat", JSON.stringify(userRes));
    }

    if (userRes.message === "Not Found") {
      const ocotocat = JSON.parse(localStorage.getItem("octocat"));
      setUserData({ ...ocotocat });
    } else {
      setUserData({ ...userRes });
    }
  };

  console.log("USER DATA: ", userData);

  useEffect(() => {
    gettingUser(inputUser);
  }, [inputUser]);

  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        height: "500px",
        borderRadius: "16px",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>Github User Searcher</div>
      <Searcher inputUser={inputUser} setinputUser={setinputUser}></Searcher>
    </Container>
  );
};

export default App;

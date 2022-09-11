import React from "react";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";
import { useState, useEffect } from "react";
import getGithubUser from "./services/users";

const App = () => {
  const [inputUser, setinputUser] = useState("octocat");
  const [userState, setUserState] = useState("inputUser");
  const [notFound, setNotFound] = useState(false);

  const gettingUser = async (user) => {
    const userRes = await getGithubUser(user);

    if (userState === "octocat") {
      console.log("XXXXXXXXXXXXXXXXXXXX");
      localStorage.setItem("octocat", userRes);
      console.log("YYYYYYYYYYYYYYYYYYYY");
    }

    if (userRes.message === "Not Found") {
      const { octocat } = localStorage;
      setinputUser(octocat);
      setNotFound(true);
    } else {
      console.log("X: ", userState);

      setUserState(userRes);
      console.log("Y: ", userState);

      setNotFound(false);
    }
    console.log("USER state:", userState);
  };

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

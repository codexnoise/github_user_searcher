import React from "react";
import { Container, Typography } from "@mui/material";
import Searcher from "./components/Searcher";
import { useState, useEffect } from "react";
import getGithubUser from "./services/users";
import UserCard from "./containers/UserCard";
import UserNotFound from "./components/UserNotFound";

const App = () => {
  const [inputUser, setinputUser] = useState("octocat");
  const [userData, setUserData] = useState({});
  const [userNotFound, setUserNotFound] = useState(false);

  const gettingUser = async (user) => {
    const userRes = await getGithubUser(user);

    if (inputUser === "octocat") {
      localStorage.setItem("octocat", JSON.stringify(userRes));
    }

    if (userRes.message === "Not Found") {
      setUserNotFound(true);
    } else {
      setUserNotFound(false);
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
      <Typography variant="h5">Github User Searcher</Typography>
      <Searcher inputUser={inputUser} setinputUser={setinputUser}></Searcher>
      {userNotFound ? (
        <UserNotFound />
      ) : (
        <UserCard userData={userData}></UserCard>
      )}
    </Container>
  );
};

export default App;

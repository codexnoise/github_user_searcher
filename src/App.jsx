import React from "react";
import {
  Container,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Searcher from "./components/Searcher";
import { useState, useEffect } from "react";
import {
  getGithubUser,
  getGithubUserRepos,
  getGithubUserLanguages,
} from "./services/users";
import UserCard from "./containers/UserCard";
import UserNotFound from "./components/UserNotFound";
import { orange } from "@mui/material/colors";

const App = () => {
  const [inputUser, setinputUser] = useState("octocat");
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState({});
  const [userLanguages, setUseruserLanguages] = useState([]);
  const [userNotFound, setUserNotFound] = useState(false);

  const theme = createTheme({
    status: {
      danger: orange[500],
      background: "red",
    },
  });

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

  const gettingRepos = async (user) => {
    const reposRes = await getGithubUserRepos(user);

    if (!reposRes.message) {
      setUserRepos({ ...reposRes });

      let repoLanguages = [];
      reposRes.map((repo) => {
        if (repo.language) {
          repoLanguages.push(repo.language);
        }
      });

      const languages = repoLanguages.filter((valor, indice) => {
        return repoLanguages.indexOf(valor) === indice;
      });
      setUseruserLanguages(languages);
    }
  };

  console.log("USER DATA: ", userData);
  console.log("USER REPOS: ", userRepos);
  console.log("USER LEN: ", userLanguages);

  useEffect(() => {
    gettingUser(inputUser);
    gettingRepos(inputUser);
  }, [inputUser]);

  return (
    <ThemeProvider theme={theme}>
      <Container
        md={6}
        sx={{
          background: "whitesmoke",
          width: "auto",
          height: "auto",
          borderRadius: "16px",
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontFamily: "Courier New", fontWeight: 'bold' }} variant="h4">
          dev Searcher
        </Typography>
        <Searcher inputUser={inputUser} setinputUser={setinputUser}></Searcher>
        {userNotFound ? (
          <UserNotFound />
        ) : (
          <UserCard
            userData={userData}
            userLanguages={userLanguages}
          ></UserCard>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;

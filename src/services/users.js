import { urlFetch } from "../constants";

export const getGithubUser = async (user) => {
  const res = await fetch(`${urlFetch}${user}`, {
    method: "GET",
  });
  const payload = res.json();
  return payload;
};

export const getGithubUserRepos = async (user) => {
  const res = await fetch(`${urlFetch}${user}/repos`, {
    method: "GET",
  });
  const payload = res.json();
  return payload;
};

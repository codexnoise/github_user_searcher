import { urlFetch } from "../constants";

const getGithubUser = async (user) => {
  const res = await fetch(`${urlFetch}${user}`, {
    method: "GET",
  });
  const payload = res.json();
  return payload;
};

export default getGithubUser;

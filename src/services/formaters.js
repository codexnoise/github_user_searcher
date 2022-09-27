import dayjs from "dayjs";

const joinedDate = (ISO) => {
  const date = dayjs(ISO);
  const formatedDate = `Joined ${date.format("DD MMM YYYY")}`;

  return formatedDate;
};

export default joinedDate;

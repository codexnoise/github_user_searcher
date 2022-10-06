import React from "react";

const Lenguages = (props) => {
  const { userLanguages } = props;
  return (
    <div>
      Lenguage(s):
      {userLanguages.map((lenguage) => (
        <li key={lenguage}>{lenguage}</li>
      ))}
    </div>
  );
};

export default Lenguages;

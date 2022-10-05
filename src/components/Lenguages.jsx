import React from "react";

const Lenguages = (props) => {
  const { userLanguages } = props;
  return (
    <div>
      {userLanguages.map((lenguage) => {
        return <li>{lenguage}</li>;
      })}
    </div>
  );
};

export default Lenguages;

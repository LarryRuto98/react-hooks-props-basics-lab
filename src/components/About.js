import React from "react";

function About({ bio }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.length > 0 && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    </div>
  );
}

export default About;


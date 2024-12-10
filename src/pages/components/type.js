import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
    
      options={{
        strings: [
          "A Few Clicks Away ",
          "From Creating Your Virtual",
          "Business",
          "Account",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Testing useEffect");
  },[]);

  return (
    <div className="container">
      <p className="lead m-5">Hi, my name is Eitan Lichtensztein and I am a beginner in the software field. I have learned languages such as Java, Python, and PHP, as well as frameworks such as React and Selenium. I am also familiar with networking concepts and Bash scripting. I am eager to start my career and continue learning in the software industry.</p>
    </div>
   
  );
}

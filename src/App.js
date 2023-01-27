import React from "react";
import Typed from "react-typed";

function App() {
  return (
    <div className="App">
        <p>
        <Typed
                    strings={[
                      "Codeclan Graduate",
                      "Aspring Front End Developer",
                      "Back End Developer",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
        </p>
    </div>
  );
}

export default App;

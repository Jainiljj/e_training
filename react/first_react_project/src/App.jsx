import React from "react";

const App = () => {
  const display = (value) => {
   console.log(value);
   console.log("Button Clicked");
};
return(
  <div>
    <h1>
      Events
    </h1>
    {<button onClick= {() => display("Data send")}>Click me</button>}
  </div>
);
};

export default App;

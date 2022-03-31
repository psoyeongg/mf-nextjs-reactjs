import Button from "./Button";
import React from "react";

const App = ({ onClick }) => (
  <div>
    <h1>Next JS with React</h1>
    <h2>Remote App</h2>
    <Button onClick={onClick} />
  </div>
);

export default App;

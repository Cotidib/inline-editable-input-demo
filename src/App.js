import React from "react";
import InlineEditable from "./InlineEditableComponent/InlineEditable";

function App() {
  
  return (
    <div>
      <h2>Edit the text below</h2>
      <InlineEditable content='edit me!'/> 
      <ul>
        <li>Click outside or Enter to submit</li>
        <li>Escape to cancel</li>
      </ul>
    </div>
  );
}

export default App;

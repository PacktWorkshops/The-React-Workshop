import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div className=”Example” id=”my-element”>
</div>
<div
  className="greeting"
  style={{ background: “black”, color: “white” }}
  onClick={() => alert('hello')}
>
Hello World
</div>

      );
   }
}
export default App;
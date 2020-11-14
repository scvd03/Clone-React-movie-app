import React from 'react';

function Food({ fav }) {
  return <h1>i like {fav}</h1>;
}

function App() {
  return (
    <div className="App">
      Hello, World!
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="beef"/>
      <Food fav="gogi"/>
    </div>
  );
}

export default App;

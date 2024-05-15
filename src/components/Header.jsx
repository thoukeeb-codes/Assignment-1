import React from 'react';


const Header = ({ fetchData }) => {
    return (
      <header className="App-header">
        <h1>Apple</h1>
        <button onClick={fetchData}>Fetch Data</button>
      </header>
    );
  };
  
  export default Header;
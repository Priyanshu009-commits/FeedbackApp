import React from 'react';

function Header() {
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>FeedBack UI</h2>
      </div>
    </header>
  );
}



const headerStyles = {
  backgroundColor: 'blue',
  color: 'pink',
  padding: '10px 0',
  textAlign: 'center',
};

export default Header;



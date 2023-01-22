import React from 'react';

function Header() {

  return (
    <div style={styles.containerStyles}>
      <img src={require('../assets/rize-logo.png')} alt="Rize logo" height="100px" />
    </div>
  )
}

const styles = {
  containerStyles: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    paddingTop: "20px"
  }
}

export default Header;
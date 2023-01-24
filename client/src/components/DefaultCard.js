import React, { useState } from 'react';

function DefaultCard({ pin, name, image, linkedIn, instagram }) {

  const [flip, setFlip] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");

  function onInputChange(event) {
    setEnteredPin(event.target.value);
    console.log(enteredPin)
  }

  function onSubmit(event) {
    event.preventDefault();
    // validate the pin
  }

  function onCardClick(event) {
    setFlip(!flip);
    setEnteredPin("");
  }

  function preventFlipOnClick(event) {
    event.stopPropagation()
  }

  if (!flip) {
    return (
      <div onClick={onCardClick} className="card border-0 shadow" style={styles.cardStyles}>
        <div className="card-body text-black container">
          <div className="row">
            <div className="col-2">
              <img src={image} alt={`${name}'s profile pic`} style={styles.avatarStyles} />
            </div>
            <div className="col-10">
              <h5 className="card-title" style={styles.nameStyles}>{name}</h5>
              <p style={styles.pStyles}>
                <a href={instagram} style={styles.linkStyles} className="card-link" target="_blank" rel="noopener noreferrer" onClick={preventFlipOnClick}>Instagram</a>, <a href={linkedIn} style={styles.linkStyles} className="card-link" target="_blank" rel="noopener noreferrer" onClick={preventFlipOnClick}>LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div onClick={onCardClick} className="card border-0 shadow" style={styles.formStyles}>
        <div className="card-body text-black container">
          <form onSubmit={onSubmit}>
            <div className="row">
              <div className="col-9">
                <input className="form-control" value={enteredPin} onChange={onInputChange} placeholder="Enter pin" onClick={preventFlipOnClick} />
              </div>
              <div className="col-3">
                <button className="btn btn-link" type="submit" style={styles.buttonStyles}>RSVP</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


const styles = {
  cardStyles: {
    backgroundColor: "black",
    paddingLeft: "20px",
    borderRadius: "20px",
    margin: "20px 0 20px 0",
    height: "100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  formStyles: {
    backgroundColor: "black",
    paddingLeft: "20px",
    borderRadius: "20px",
    margin: "20px 0 20px 0",
    height: "100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  avatarStyles: {
    width: "64px",
    height: "64px",
    objectFit: "cover",
    borderRadius: "50%"
  },
  nameStyles: {
    color: "#A88E35"
  },
  linkStyles: {
    margin: 0,
    color: "white"
  },
  pStyles: {
    margin: 0,
    color: "white"
  },
  buttonStyles: {
    color: "#A88E35",
    textDecoration: "none"
  }
}

export default DefaultCard;
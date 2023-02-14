import React from 'react';
import background from "../assets/gold.jpg";


function RsvpCard({ name, image, linkedIn, instagram }) {

  return (
    <div className="bg-image card border-0 shadow" style={styles.cardStyles}>
      <div className="card-body text-black container">
        <div className="row">
          <div className="col-2">
            <img src={image} alt={`${name}'s profile pic`} style={styles.avatarStyles} />
          </div>
          <div className="col-10" style={styles.textContainerStyles}>
            <h5 className="card-title">{name}</h5>
            <p style={styles.pStyles}>
              <a href={instagram} style={styles.linkStyles} className="card-link text-black" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href={linkedIn} style={styles.linkStyles} className="card-link text-black" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  cardStyles: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
  textContainerStyles: {
    paddingLeft: "25px"
  },
  linkStyles: {
    margin: 0
  },
  pStyles: {
    margin: 0
  }
}

export default RsvpCard;
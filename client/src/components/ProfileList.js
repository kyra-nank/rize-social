import React from 'react';
import Profile from './Profile'

function ProfileList({ guestList }) {

  return (
    <div style={styles.divStyles}>
      {guestList.map((profile) => {
        return (
          <Profile
            key={profile.pin}
            pin={profile.pin}
            rsvp={profile.rsvp}
            name={profile.name}
            image={profile.image}
            linkedIn={profile.linkedIn}
            instagram={profile.instagram}
          />
        )
      })}

    </div>
  )
}

const styles = {
  divStyles: {
    minHeight: "100vh"
  }
}

export default ProfileList;
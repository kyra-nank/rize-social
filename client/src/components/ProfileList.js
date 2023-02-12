import React from 'react';
import Profile from './Profile'

function ProfileList({ guestList }) {

  guestList = guestList.sort((profile1, profile2) => {
    return (profile1.rsvp === profile2.rsvp) ? 0 : profile1.rsvp ? -1 : 1;
  });

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
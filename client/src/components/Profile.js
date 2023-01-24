import React from 'react';
import DefaultCard from './DefaultCard'
import RsvpCard from './RsvpCard';

function Profile({ pin, rsvp, name, image, linkedIn, instagram }) {

  if (!rsvp) {
    return <DefaultCard
      pin={pin}
      name={name}
      image={image}
      linkedIn={linkedIn}
      instagram={instagram}
    />
  } else {
    return <RsvpCard
      name={name}
      image={image}
      linkedIn={linkedIn}
      instagram={instagram}
    />
  }

}

export default Profile;
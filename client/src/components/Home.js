import React from 'react';

import ProfileList from './ProfileList';

function Home({ guestList }) {
  console.log(guestList)
  if (!guestList) {
    return (
      <div>Loading</div>
    )
  } else {
    return (
      <div>
        <ProfileList guestList={guestList} />
      </div>
    )
  }

}

export default Home;
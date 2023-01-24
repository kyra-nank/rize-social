import React from 'react';
import { connect } from 'react-redux'

import ProfileList from './ProfileList';

function Home({ guestList }) {
  console.log(guestList)
  return (
    <div>
      Home
      <ProfileList guestList={guestList} />
    </div>
  )
}

function mapStateToProps({ guestList }) {
  return { guestList };
}

export default connect(mapStateToProps)(Home);
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';

import background from '../assets/app-background.jpeg';

const Footer = () => <h2>Footer</h2>
const Home = () => <h2>Home</h2>
const AddGuest = () => <h2>AddGuest</h2>
const SearchBar = () => <h2>SearchBar</h2>
const ProfileList = () => <h2>ProfileList</h2>
const Profile = () => <h2>Profile</h2>
const InviteeProfile = () => <h2>InviteeProfile</h2>
const AttendeeProfile = () => <h2>AttendeeProfile</h2>



class App extends Component {
  componentDidMount() {
    this.props.fetchGuests();
  }

  render() {
    return (
      <div style={styles.divStyles}>
        <div style={styles.blackLayer}>
          <BrowserRouter>
            <div>
              <Header />
              <Route exact path="/" component={Home} />
              <Route path="/add-guests" component={AddGuest} />
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      </div>
    )
  }
};

const styles = {
  divStyles: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    height: "100%"
  },
  blackLayer: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    height: "100%"
  }
}

export default connect(null, actions)(App);
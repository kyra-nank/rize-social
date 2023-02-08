import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
import { fetchGuests } from '../actions';

import Header from './Header';
import Home from './Home';
import Footer from './Footer'

const AddGuest = () => <h2>AddGuest</h2>

function App() {
  const dispatch = useDispatch();
  const guestList = useSelector(state => state.guestList);

  console.log("this is the guestList")
  console.log(guestList)

  const [dispatched, setDispatched] = useState(false);

  useEffect(() => {
    if (!dispatched) {
      dispatch(fetchGuests());
      setDispatched(true);
    }
  }, [dispatched, dispatch]);

  return (
    <div>
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={(props) => <Home {...props} guestList={guestList} />} />
            <Route path="/add-guests" component={AddGuest} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </div>
  )

  // return (
  //   <div>
  //     <p>Hi</p>
  //     <ul>
  //       {guestList.map(profile => (
  //         <li key={profile._id}>{profile.pin}</li>
  //       ))}
  //     </ul>
  //   </div>
  // )

}

export default App;



// import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import * as actions from '../actions'

// import Header from './Header';
// import Home from './Home';
// import Footer from './Footer'

// import background from '../assets/app-background.jpeg';

// const AddGuest = () => <h2>AddGuest</h2>
// // const SearchBar = () => <h2>SearchBar</h2>
// // const InviteeProfile = () => <h2>InviteeProfile</h2>
// // const AttendeeProfile = () => <h2>AttendeeProfile</h2>

// class App extends Component {
//   componentDidMount() {
//     this.props.fetchGuests();
//   }

//   render() {
//     return (
//       <div style={styles.divStyles}>
//         <div style={styles.blackLayer}>
//           <BrowserRouter>
//             <div>
//               <Header />
//               <Route exact path="/" component={Home} />
//               <Route path="/add-guests" component={AddGuest} />
//               <Footer />
//             </div>
//           </BrowserRouter>
//         </div>
//       </div>
//     )
//   }
// }

// const styles = {
//   divStyles: {
//     backgroundImage: `url(${background})`,
//     backgroundPosition: "center",
//     height: "100%"
//   },
//   blackLayer: {
//     backgroundColor: "rgba(0, 0, 0, 0.75)",
//     height: "100%"
//   }
// }

// export default connect(null, actions)(App);
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter, Route } from 'react-router-dom'
import { fetchGuests } from '../actions'

import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import AddGuest from './AddGuest'

import background from '../assets/app-background.jpeg'

function App() {
  const dispatch = useDispatch()
  const guestList = useSelector(state => state.guestList)


  useEffect(() => {
    dispatch(fetchGuests())
  }, [])
  return (
    <div style={styles.divStyles}>
      <div style={styles.blackLayer}>
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

}

const styles = {
  divStyles: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    height: "100%"
  },
  blackLayer: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    height: "100%",
    padding: "20px"
  }
}

export default App
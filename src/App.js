import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderNav from './components/HeaderNav'
import HomePage from './pages/HomePage'
import ServiceTimes from './pages/ServiceTimes'
import SermonsPage from './pages/SermonsPage'
import SpecialEvents from './pages/SpecialEvents'
import AboutUs from './pages/AboutUs'
import FooterBar from './components/FooterBar'

class App extends Component {
  render() {
    return (
      <Router>
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/services" component={ServiceTimes}></Route>
          <Route exact path="/sermons" component={SermonsPage}></Route>
          <Route exact path="/events" component={SpecialEvents}></Route>
          <Route exact path="/about" component={AboutUs}></Route>
        </Switch>
        <FooterBar />
      </Router>
    )
  }
}

export default App

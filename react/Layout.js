import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Players from './Players'
import Navbar from './Navbar'

const Layout = () => (
  <div className="app-wrapper">
    <Navbar />

    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/players" exact component={Players} />
      </Switch>
    </main>
  </div>
)

export default Layout

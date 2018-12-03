import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import Ranking from "./Ranking"
import Navbar from "./Navbar"

const Layout = () => (
  <div className="app-wrapper">
    <Navbar />

    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ranking" exact component={Ranking} />
      </Switch>
    </main>
  </div>
)

export default Layout

import React from 'react'
import { NavLink, Switch, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Navbar from './Navbar'

const Layout = () => (
    <div className="app-wrapper">
        <Navbar />
            
        <main>
            <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/about" exact component={ About } />
            </Switch>
        </main>
    </div>
)

export default Layout

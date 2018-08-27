import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
// import Project from './components/Project/Project';

export default function() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/projects' component={Projects}/>
            {/* <Route path='/project/:title' component={Project}/> */}
        </Switch>
    )
}
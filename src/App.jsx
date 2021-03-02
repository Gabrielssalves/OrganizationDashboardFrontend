import './App.css'
import React  from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/NavBar'
import CalendarPage from './Pages/CalendarPage'
import SpacePage from './Pages/SpacePage'
// import First from './components/basics/First.jsx'
// import WithParameters from './components/basics/WithParameters.jsx'
// import WithChildren from './components/basics/WithChildren'
// import Repetition from './components/basics/Repetition'
// import Conditional from './components/basics/Conditional'
// import Parent from './components/communications/direct/Parent'
// import Super from './components/communications/indirect/Super'
// import Input from './components/form/input'
// import Counter from './components/counter/Counter'
// import Card from './components/layout/Card'

export default () => {
    return (
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <Route path="/space" exact component={SpacePage} ></Route>
                    <Route path="/space/trabalho" exact component={SpacePage} ></Route>
                    <Route path="/calendar" exact component={CalendarPage} ></Route>
                </Switch>
            </Router>
    )
}
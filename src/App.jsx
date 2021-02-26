import './App.css'
import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import OrganizationDashboarAPI from './data/OrganizationDashboardAPI'
import Navbar from './components/NavBar'
import Note from './components/Note'
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

export default (props) => {
    const [commitments, setCommitments] = useState([]);

    useEffect (() => {
        const loadAll = async () => {
            let cmmts = await OrganizationDashboarAPI.getCommitments();
            setCommitments(cmmts);
        }

        loadAll();
    }, []);

    return (
        <div className="App">
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <Route path="/"></Route>
                </Switch>
            </Router>
            <section className="Space">
                {commitments.map((item, key) => (
                    <Note 
                        key={key} name={item.Name} description={item.Description}
                        initialCommitmentDate={item.InitialCommitmentDate} 
                        finalCommitmentDate={item.FinalCommitmentDate}
                    />
                ))}
            </section>
            {/* <h1>React Foundations</h1>
            <div className="Cards">
                <Card title="Counter">
                    <Counter />
                </Card>
                <Card title="Input">
                    <Input  />
                </Card>
                <Card title="Indirect Communication">
                    <Super />
                </Card>
                <Card title="Direct Communication">
                    <Parent />
                </Card>
                <Card title="Conditional">
                    <Conditional number={10} />
                </Card>
                <Card title="Repetition">
                    <Repetition />
                </Card>
                <Card title="Components With Children">
                    <WithChildren>
                        <ul>
                            <li>Ana</li>
                            <li>Bia</li>
                            <li>Carlos</li>
                            <li>Daniel</li>
                        </ul>
                    </WithChildren>
                </Card>
                <Card title="Components With Parameters">
                    <WithParameters 
                        title="This is the title"
                        subtitle="This is the subtitle" />
                </Card>        
                <Card title="First Component">
                    <First />
                </Card>
            </div>         */}
        </div>
    )
}
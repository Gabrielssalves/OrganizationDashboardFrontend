import React, { useState, useEffect } from 'react'
import Note from './Note'
import OrganizationDashboarAPI from '../data/OrganizationDashboardAPI'
import './Space.css'

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
        <div className="space">
            {commitments.map((item, key) => (
                    <Note 
                        key={key} name={item.Name} description={item.Description}
                        initialCommitmentDate={item.InitialCommitmentDate} 
                        finalCommitmentDate={item.FinalCommitmentDate}
                    />
                ))}
        </div>
    )
}
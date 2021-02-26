import React, {useState} from 'react'

export default (props) => {
    const [name, setName] = useState('Pedro')    
    return (
        <React.Fragment>
            <h3>{name}</h3>
            <input 
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}></input>
        </React.Fragment>
    )
}
import React from 'react'

export default (props) => {
    return (
        <React.Fragment>
            <label for="stepInput">Step: </label>
            <input id="stepInput" type="number" 
                value={props.step} 
                onChange={e => props.onStepChange(+e.target.value)} />
        </React.Fragment>
    );
};
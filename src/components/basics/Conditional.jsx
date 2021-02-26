import React from 'react'

export default (props) => {
    return(
        <div>
            <h2>The number is: {props.number}</h2>
            {props.number % 2 === 0 ? 
                <span>Even</span>
                :<span>Odd</span>
            }            
        </div>
    )
}
import React, {useState} from 'react'
import Sub from './Sub'

export default (props) => {
    const [num, setNum] = useState(0)

    function click(value) {
        setNum(value)
    }

    return (
        <div>
            <h4>Valor: {num}</h4>
            <Sub click={click}></Sub>
        </div>
    );
};

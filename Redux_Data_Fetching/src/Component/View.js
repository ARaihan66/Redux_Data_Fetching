import React from 'react';
import { useDispatch, useSelector } from 'react-redux'


const View = () => {
    const data = useSelector((state) => state)
    console.log(data);
    return (
        <div>
            <h2>Hello</h2>
        </div>
    )
}

export default View

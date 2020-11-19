import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';


const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className='joinContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>sayhey .</h1>
                <div>
                    <input placeholder='name' className='joinInput' type='text' onChange={event => setName(event.target.value)}></input>
                    <input placeholder='room' className='joinInput mt-20' type='text' onChange={event => setRoom(event.target.value)}></input>
                    <Link to={`/chat?name=${name}&room=${room}`} onClick={event => (!name || !room) ? event.preventDefault() : null}>
                        <button className='button mt-20' type='submit'>Sign in</button>
                    </Link>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Join;

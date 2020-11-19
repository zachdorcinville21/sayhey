import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';

import './Occupants.css';


const Occupants = ({ users, showUsers }) => {
    return (
        <div className='occupantsContainer'>
            <h4 className='occupantsHeader'>Members</h4>
            <div className='innerContainer'>
                {users.map(user => <p className='userInRoom'><img src={onlineIcon} alt='online icon' /> {user.name}</p>)}
            </div>
        </div>
    );
}


export default Occupants;


import React, { useState, useEffect } from 'react';
import querystring from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import Occupants from '../Occupants/Occupants';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [users, setUsers] = useState([]);
    const ENDPOINT = "https://say--hey.herokuapp.com/";

    useEffect(() => {
        const { name, room } = querystring.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {

        });

    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message])
        });

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });

        socket.on('disconnect', ({ message }) => {
            console.log(message);
        });

    }, [messages]);

    const sendMessage = event => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    console.log(window.screen.width);

    return (
        <div className='outerContainer'>
            <div className='container'>
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            {window.screen.width > 490 && <div className='usersInRoom'>
                <Occupants users={users} />
            </div>}
        </div >
    );
}

export default Chat;

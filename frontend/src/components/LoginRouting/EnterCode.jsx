import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import rooms from './code.json';
import axios from 'axios';

const Login = () => {
    // const [IP, setIP ] = useState("");
    // const retrieveIP = async () => {
    //   const res = await axios.get("https://geolocation-db.com/json/")
    //   setIP(res.data.IPv4);
    // }
    // useEffect( () => {
    //   retrieveIP();
    // }, [])
    // console.log(IP);

    const navigate = useNavigate();
    const handleClick = () => {
        console.log('login');
        navigate('/' + code, { replace: true });
    };

    const [username, setUsername] = useState(
        localStorage.getItem('username') ? localStorage.getItem('username') : ''
    );
    const [code, setCode] = useState(
        localStorage.getItem('code') ? localStorage.getItem('code') : ''
    );

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const onCodeChange = (e) => {
        setCode(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleClick}>
                <label>Name</label>
                <input
                    type='text'
                    value={username ? username : ''}
                    onChange={onUsernameChange}
                />
                <br></br>
                <label>Code</label>
                <input
                    type='text'
                    value={code ? code : ''}
                    onChange={onCodeChange}
                />
                <button
                    type='submit'
                    onClick={() => {
                        console.log(`Form submitted, ${username}`);
                        let index = rooms.findIndex((room) => {
                            console.log(room.code);
                            return room.code === code;
                        });
                        if (index !== -1) {
                            localStorage.setItem('username', username);
                            localStorage.setItem('code', code);
                            localStorage.setItem(code, true);
                            if (!rooms[index].participants.includes(username)) {
                                rooms[index].participants.push(username);
                                console.log(rooms[index].participants);
                            }
                        }
                    }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
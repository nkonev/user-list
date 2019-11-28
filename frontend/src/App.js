import React, {Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {SERVER_URL} from "./config";
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}


function App() {
    const [name, setName] = useState('World');
    const [message, setMessage] = useState(null);

    let setNameF = e => {
        e.preventDefault();
        setName(e.target.value);
    };

    let setMessageF = e => {
        e.preventDefault();
        axios.get(`${SERVER_URL}/hello/${name}`)
            .then(message => {
                const m = message.data;
                setMessage(m);
            })
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {/* <4> */}
                <form onSubmit={setMessageF}>
                    <label>Enter your name: </label>
                    <input type="text" value={name} onChange={setNameF}/>
                    <input type="submit" value="Submit"/>
                </form>

                {/* <5> */}
                <p>
                    {message ?
                        <strong>{message}</strong> :
                        <span>Edit <code>src/App.js</code> and save to reload.</span>
                    }
                </p>
            </header>
        </div>
    );
}

export default (App);


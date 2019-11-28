import React, {Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {SERVER_URL} from "./config";
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function App() {
    const [name, setName] = useState('World');
    const [message, setMessage] = useState(null);
    const classes = useStyles();

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
            <div className={classes.root}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Nikita Konev" />
                    </ListItem>
                    <ListItemLink href="#simple-list">
                        <ListItemText primary="Konev Nikita" />
                    </ListItemLink>
                </List>
            </div>
        </div>
    );
}

export default (App);


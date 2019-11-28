import React, {Component, useState, useEffect} from 'react';
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

function App() {
    // state
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            console.log("before get");
            axios.get(`${SERVER_URL}/user`)
                .then(message => {
                    const m = message.data;
                    setUsers(m);
                });
        };

        fetchData();
    }, []);

    const classes = useStyles();

    return (
        <div className="App">
            <div className={classes.root}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <List component="nav" aria-label="secondary mailbox folders">
                    {users.map((value, index) => {
                        return (
                            <ListItem key={value.id}>
                                <ListItemText primary={value.name + ' '+ value.surname} />
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        </div>
    );
}

export default (App);


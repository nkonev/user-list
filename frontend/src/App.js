import React, {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {SERVER_URL} from "./config";
import axios from 'axios'
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        bottom: 30,
        right: 30,
        margin: '0 auto',
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2),
    },
}));

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

function App() {
    // state
    const [users, setUsers] = useState([]);

    const fetchData = () => {
        console.log("before get");
        axios.get(`${SERVER_URL}/user`)
            .then(message => {
                const m = message.data;
                setUsers(m);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const classes = useStyles();

    const onDelete = e => {
        console.log("Deleting", e);
        axios.delete(`${SERVER_URL}/user/${e}`)
            .then(() => {
                fetchData();
            });
    };

    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = (e) => {
        console.log("Editing modal", e);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


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

                                <Grid container spacing={1} direction="row">
                                    <Grid item xs>
                                        <ListItemText primary={value.name + ' ' + value.surname}/>
                                    </Grid>

                                    <Grid container item xs={2} direction="row"
                                          justify="flex-end"
                                          alignItems="center" spacing={1}>
                                        <Grid item>
                                            <Button variant="contained" color="primary"
                                                    onClick={() => handleOpen(value.id)}>
                                                Edit
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" color="secondary"
                                                    onClick={() => onDelete(value.id)}>
                                                Delete
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        )
                    })}
                </List>

                <Fab color="primary" aria-label="add" className={classes.fabButton}>
                    <AddIcon />
                </Fab>
            </div>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>

                    <Grid container
                          direction="column"
                          justify="center"
                          alignItems="stretch"
                          spacing={2}>
                        <Grid item>
                            <span>Update user</span>
                        </Grid>
                        <Grid item container spacing={1} direction="column" justify="center"
                              alignItems="stretch">
                            <Grid item>
                                <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item>
                                <TextField id="outlined-basic" label="Surname" variant="outlined" fullWidth/>
                            </Grid>

                        </Grid>
                        <Grid item container spacing={1}>
                            <Grid item>
                            <Button variant="contained" color="primary">
                                Save
                            </Button>
                            </Grid>
                            <Grid item>
                            <Button variant="contained" color="secondary">
                                Cancel
                            </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Modal>
        </div>
    );
}

export default (App);
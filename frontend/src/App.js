import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {SERVER_URL} from "./config";
import axios from 'axios'

class App extends Component {


    state = {
        name: 'World',
        message: null
    };


    setName = e => this.setState({name: e.target.value});


    getMessage = e => {
        e.preventDefault();
        axios.get(`${SERVER_URL}/hello/${this.state.name}`)
            .then(message => {
                const m = message.data;
                this.setState({message: m});
            })

    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    {/* <4> */}
                    <form onSubmit={this.getMessage}>
                        <label>Enter your name: </label>
                        <input type="text" value={this.state.name} onChange={this.setName}/>
                        <input type="submit" value="Submit"/>
                    </form>

                    {/* <5> */}
                    <p>
                        {this.state.message ?
                            <strong>{this.state.message}</strong> :
                            <span>Edit <code>src/App.js</code> and save to reload.</span>
                        }
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;

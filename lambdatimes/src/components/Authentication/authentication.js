import React, { Component } from 'react'
import Login from '../Login/Login'

const authenticate = App =>
    class extends Component {
        constructor() {
            super()
            this.state = {
                loggedIn: false,
            }
        }
        componentDidMount() {
            //check for locally stored street cred
            const usr = localStorage.getItem('username')
            const pwd = localStorage.getItem('password')
            if(usr && pwd) this.setState({loggedIn: true})
            else this.setState({loggedIn: false})
        }
        render() {
            //if user has street cred show them the content
            //otherwise hit them with a login screen
            return this.state.loggedIn ? <App /> : <Login />
        }
    }

export default authenticate
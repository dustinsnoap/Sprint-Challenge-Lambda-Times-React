import React, { Component } from 'react'
import styled from 'styled-components'

class Login extends Component {
    constructor(props) {
        super()
        this.state = {
            usr: '',
            pwd: '',
            forgotText: 'Forgot password?',
        }
    }
    h_enter = e => {
        //check if enter key was pressed
        if(e.key === 'Enter') {
            this.h_checkStreetCred()
        }
    }
    h_updateUsername = e => {
        this.setState({usr: e.target.value})
    }
    h_updatePassword = e => {
        this.setState({pwd: e.target.value})
    }
    h_checkStreetCred = () => {
        //don't bother checking for cred, just let them in
        const usr = this.state.usr
        const pwd = this.state.pwd
        localStorage.setItem('username', JSON.stringify(usr))
        localStorage.setItem('password', JSON.stringify(pwd))
        window.location.reload()
    }
    h_forgotPassword = () => {
        this.setState({forgotText: 'That sucks.'})
    }
    render() {
        return (
            <LoginWrapper>
                <LoginElement onKeyUp={this.h_enter}>
                    <LoginHeader>TIMES</LoginHeader>
                    <LoginInput
                        type='text' placeholder='Phone number, username, or email'
                        onChange={this.h_updateUsername}/>
                    <LoginInput
                        type='password'
                        placeholder='Password'
                        onChange={this.h_updatePassword}/>
                    <LoginButton onClick={this.h_checkStreetCred}>Log in</LoginButton>
                    <LoginForgot onClick={this.h_forgotPassword}>{this.state.forgotText}</LoginForgot>
                </LoginElement>
            </LoginWrapper>
        )
    }
}

export default Login

const LoginWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
`
const LoginElement = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 1.5rem 3rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-width: 350px;
    margin-bottom: 20%;
`
const LoginHeader = styled.h1`
    font-family: Didot, serif;
    font-size: 5rem;
    line-height: 8rem;
    color: #333;
    text-align: center;
`
const LoginInput = styled.input`
    margin: 0.75rem 0;
    border: 1px solid #e0e0e0;
    padding: 1rem;
    border-radius: 5px;
    background-color: #efefef;
    outline: none;
    &:hover,&:focus {
        border-color: #bbb;
    }
`
const LoginButton = styled.button`
    margin: 0.75rem 0;
    padding: 1rem;
    background-color: #bbb;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        background-color: #999;
    }
`
const LoginForgot = styled.pre`
    font-size: 1.5rem;
    text-align: center;
    line-height: 2rem;
    color: #385185;
    cursor: pointer;
`
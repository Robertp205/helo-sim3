import React, { Component } from 'react'

export default class Auth extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: '',

        }
    }

login = ()=>{
    const {username, password} = this.state;
}


    render() {
        return (
            <div className='mid-box-lox'>
                <button>Login</button>
                <button>Register</button>
            </div>
        )
    }
}

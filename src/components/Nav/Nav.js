import React, { Component } from 'react'
import './Nav.css'

export default class Nav extends Component {
    render() {
        return (
            <div className='parent-sidebar'>
                <div>
                    <button>Home</button>
                    <button>New Post</button>
                    <button>Logout</button>

                </div>
            </div>
        )
    }
}

import React from 'react'
import { Browser as Router, Link, NavLink, Route, Component } from 'react-router-dom'
import axios from 'axios'
import NewFriend from './NewFriend'

 class Friends extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friends:[],
            ids: []

         }
    }

     render(props){
        return(
            <div>
               <NewFriend deleter={this.props.deleter} match={this.props.match} friends={this.props.friends} /> 

             </div>
        )
    }
}

 export default Friends ;
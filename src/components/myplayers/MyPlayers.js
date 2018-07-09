import React, { Component } from 'react';
import axios from 'axios';
import './MyPlayers.css'



export default class MyPlayers extends Component {
    constructor(){
        super();
        this.state={
            myPlayerList: [],
            search: ''
        }
    }
    handleInput(prop, val){
        this.setState({
            [prop]: val
        })
    }
    handleClick(){
        //console.log('hit')
        let newPlayer = {
            
            Name: this.state.name,
            Team: this.state.team
        }
        axios.post('/api/myPlayerList', newPlayer).then((res) => {
        
            this.setState({myPlayerList: res.data})
        })
    }
    componentDidUpdate(prevProps, prevState){
if(prevProps.myPlayerList.length !== this.props.myPlayerList.length){
    this.setState({myPlayerList: this.props.myPlayerList})
} 
    }
deletePlayer(id){
    axios.delete('api/myPlayerList/:id').then((res) => {
        this.setState({myPlayerList: res.data})
    })
}



    render(){
        let newPlayer = this.state.myPlayerList.map((e) => {
            return <div key={e.id}>
            <p>Name: {e.Name}</p>
            <p>team: {e.Team}</p>
            <button onClick={() => this.deletePlayer()}>delete</button>
            </div>
        })
        return(
            
           <div className="create-player">
           <p>Create a Player:</p>
           <input  onChange={e => this.handleInput('name', e.target.value)} type="text"  placeholder="Name" />
           <input  onChange={e => this.handleInput('team', e.target.value)} type="text"  placeholder="Team" />
           <button onClick={() => this.handleClick()}>Create</button>
           <div className="my-players">
           <h2>My Team:</h2>
           <div>{newPlayer}</div>
           </div>
           </div>
           

           )
    }
}
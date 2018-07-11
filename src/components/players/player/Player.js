import React, { Component } from 'react';



export default class Player extends Component {
       
        render(){
            return(
                <div key={this.props.id}>
            <p>Name: {this.props.Name}</p> 
            <p>Team: {this.props.Team}</p>
            <button onClick={() => this.props.addPlayers(this.props.id, this.props.Name, this.props.Team)}>Add To My Players</button>
            </div>

            )
        }
}
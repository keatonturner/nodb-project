import React, {Component} from 'react';
import axios from 'axios';
import './Players.css'



export default class Players extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            playersToDisplay: []
    }
}
getPlayers(){
    let promise = axios.get('/api/playerList')
    promise.then((res) => {
        this.setState({
            playersToDisplay: res.data
        })
    })
}
handleInput(prop, val){
    this.setState({
        [prop]: val

    })
}
updateSearch(e){
this.setState({search: e.target.value})

}

    
    render(){
   
    
       let GetPlayers = this.state.playersToDisplay.filter((e) => {
           return e.name.toLowerCase().includes(this.state.search.toLowerCase());
       }).map((e) => {
           return(
            <div key={e.id}>
            <p>Name: {e.name}</p> 
            <p>Team: {e.team}</p>
            <button onClick={() => this.props.addToMyPlayers(e.id, e.name, e.team)}>Add To My Players</button>
            </div>
           )
       })
     
            

      
        return(
            
            
            <div className="top-players">
            <section className="search-player">
            <p>Search Players:</p>
            <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search Player" /> 
            <button onClick={() => this.updateSearch()}> onSearch</button>
            </section>
            <button className="get-players"onClick={() => this.getPlayers()}>Get Players</button>
            <h2>Top 20 Players:</h2>
             { GetPlayers }
            </div>
            

        )
    }
}
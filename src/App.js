import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import Header from './components/Header';
import Players from './components/players/Players';
import MyPlayers from './components/myplayers/MyPlayers';

class App extends Component {
  constructor(){
    
    super();
    this.state={
      playerList: [],
      playersToDisplay: [],
      myPlayerList: []
      
      
    }
    this.addToMyPlayers = this.addToMyPlayers.bind(this);
  }
componentDidMount(){
  axios.get('/api/playerList' )
  .then((res) => {
    this.setState({
      playerList: res.data,
      
    })
  })
}
addToMyPlayers(id, Name, Team){
  
  axios.put('/api/getPlayer/:id', {Name, Team}).then((res) => {
    this.setState({playersToDisplay: res.data.playerList, myPlayerList: res.data.myPlayerList})
    
  })
}

  render() {
    return (
      <div className="App">
      <Header />
      

      <main className="allPlayers">
      <section >
         
          <Players playersToDisplay={this.state.playerList} addToMyPlayers={this.addToMyPlayers}  />
          </section>

          <section className="my-players">
          <MyPlayers myPlayerList={this.state.myPlayerList}/>
          </section>
      
      </main>
      </div>
    );
  }
}

export default App;

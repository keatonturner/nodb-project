 const axios = require('axios');

let playerList = [
    {id: 1, name: "Mike Trout", team: "Angels"},
    {id: 2, name: "Jose Altuve", team: "Astros"},
    {id: 3, name: "Bryce Harper", team: "Nationals"},
    {id: 4, name: "Joey Votto", team: "Reds"},
    {id: 5, name: "Clayton Kershaw", team: "Dodgers"},
    {id: 6, name: "Nolan Arenado", team: "Rockies"},
    {id: 7, name: "Kris Bryant", team: "Cubs"},
    {id: 8, name: "Josh Donaldson", team: "Blue Jays"},
    {id: 9, name: "Carlos Correa", team: "Astros"},
    {id: 10, name: "Max Scherzer", team: "Nationals"},
    {id: 11, name: "Corey Kluber", team: "Indians"},
    {id: 12, name: "Paul Goldschmidt", team: "Diamondbacks"},
    {id: 13, name: "Freddie Freeman", team: "Braves"},
    {id: 14, name: "Aaron Judge", team: "Yankees"},
    {id: 15, name: "Giancarlo Stanton", team: "Yankees"},
    {id: 16, name: "Charlie Blackmon", team: "Rockies"},
    {id: 17, name: "Francisco Lindor", team: "Indians"},
    {id: 18, name: "Corey Seager", team: "Dodgers"},
    {id: 19, name: "Mookie Betts", team: "Red Sox"},
    {id: 20, name: "Manny Machado", team: "Orioles"}
];
let myPlayerList = [];
let id = 21;


  


module.exports = {
    add: (req, res) => {
        const { Name, Team } = req.body;
        myPlayerList.push({  id, Name, Team});   
         id++;   
res.status(200).send(myPlayerList)
    },

    read: (req, res) => {
        res.status(200).send(playerList)
    },
    update: (req, res) => {
    const {Name, Team} = req.body;
    const id = req.params.id;
    playersIndex = playerList.findIndex(player => player.id == id)
    playerList.splice(playersIndex, 1)

    myPlayerList.push({id, Name, Team})
    console.log(myPlayerList)
    res.status(200).send({myPlayerList, playerList})
    
    },

    delete: (req, res) => {
const deleteId = req.params.id;
playersIndex = myPlayerList.findIndex(player => player.id == deleteId);
myPlayerList.splice(playersIndex, 1);
res.status(200).send(myPlayerList);
    }
}
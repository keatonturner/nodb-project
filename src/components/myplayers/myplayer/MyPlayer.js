import React, { Component } from 'react';


export default function MyPlayer(props){
    return(   
            <div key={props.id}>
            <p>Name: {props.name}</p>
            <p>Team: {props.team}</p>
            <button onClick={() => props.addDelete(props.id, props.name, props.team)}>delete</button>
            </div>
    )
}

import React from 'react';
import './styles/box.css';

export default class Box extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
        console.log(this.props.title, " is created")
    }
    static getDerivedStateFromProps(props, state){
         console.log("recieved props", props)
         return state
    }

   render(){
       console.log("Box rendered")
       return(
       <div className="box">
            {this.props.title}
            <hr/>
            <ul>
                    {this.props.items.map((x)=><li key={x}>{x}</li>)}
            </ul>
        </div>
       );
   }
}


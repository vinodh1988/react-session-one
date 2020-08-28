import React  from 'react';
import Box from './Components/Box';
import './App.css';


class App extends React.Component{
    constructor(){
      super();
        this.state = {
            titles: ["Fruits","Vegetables","Spices"],
            items: [
            ['Banana','Apple','Orange'],
            ['Carrot','Beans','Brinjal'],
            ['Pepper',"Cinnamon","Jeera"]]

        }

        this.item= React.createRef();
        this.type= React.createRef();
        this.handleClick = this.handleClick.bind(this);
        console.log("App is created");
    }

    componentDidMount(){
      console.log("App is mounted");
    }
    
    componentDidUpdate(){
      console.log("App did update");
    }
    handleClick(){
        console.log(this.item.current.value,this.type.current.value)
        this.state.items[this.type.current.value].push(this.item.current.value);
        this.setState(this.state);
    }

     render(){
       console.log("App is rendering")
       return(
         <div>
         <h1>First Component</h1>
         <hr/>
            Item 
            <input type="text" ref={this.item}/>
            <select ref={this.type}>
                  <option value="0">Fruits</option>
                  <option value="1">Vegetables</option>
                  <option value="2">Spices</option>
            </select>  
            <button onClick={this.handleClick}>Add an Item</button>
          <hr/>
         <Box title={this.state.titles[0]} items={this.state.items[0]}></Box>
         <Box title={this.state.titles[1]} items={this.state.items[1]}></Box>
         <Box title={this.state.titles[2]} items={this.state.items[2]}></Box>
         </div>
       )
     }
     
}
export default App;

/*
   Template
   Style
   Event handing
   Data
*/
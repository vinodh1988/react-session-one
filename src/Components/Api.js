import React from 'react';
import Request from 'axios';

class Api extends React.Component{
    constructor(){
        super()
        this.state ={people: [], sno:"",name:"",city:""}
    }
    componentDidMount(){
           this.readPeople();
    }

    storePerson(data)
    {
        Request.post("http://localhost:5000/people",data).then(
            (response)=> { this.readPeople()},
            ()=>alert("Something wrong!!!")
        )
        
    }

    readPeople(){
        console.log("getting called")
           Request.get("http://localhost:5000/people").then(
           (response) => {
              let temp ={...this.state, people: response.data}
               this.setState(temp);
           },
           ()=> console.log("error")
           );  
    }
    render(){
        
        let code = this.state.people.map (x => 
              <tr key={x.id}>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                  <td>{x.city}</td>
              </tr>
            )
        return(
            <div id="">
            <form>
            <table id="tabform">
                <tbody>
                <tr>
                    <td>sno</td>
                    <td><input type="text" value={this.state.sno} 
                    onChange={(e)=>{this.setState({sno:e.target.value})}}></input></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td><input type="text" value={this.state.name} 
                     onChange={(e)=>{this.setState({name:e.target.value})}}></input></td>
                </tr>
                <tr>
                    <td>city</td>
                    <td><input type="text" value={this.state.city} 
                     onChange={(e)=>{this.setState({city:e.target.value})}}></input></td>
                </tr>
                <tr>
                    <td colSpan="2" align="center">
                <input type="button" value="store" 
                onClick={()=>{this.storePerson({id: this.state.sno,name:this.state.name,city:this.state.city})}} />
                            
                    </td>
                </tr>
                </tbody>
            </table>
           </form>
         
             <table className="table table-hover">
                 <thead>
                   <tr>
                       <th>sno</th>
                       <th>Name</th>
                       <th>City</th>
                   </tr>
                </thead>
                <tbody>
                    {code}
                </tbody>
             </table>
           </div>
        )
    }
}

export default Api;
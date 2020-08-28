import React,{createRef} from 'react';
import './styles/about.css'

class About extends React.Component{
    constructor(){
        super();
        this.state = {
        theme1 : { backgroundColor: "#2E4053" ,height: "300px", width: "300px"}, 
        theme2 : { backgroundColor: "#424949", height: "300px", width: "300px" },
        theme3 : { backgroundColor: "#7F8C8D", height: "300px", width: "300px" } ,
        current :  { backgroundColor: "#2E4053",height: "300px", width: "300px" }
     }
      this.handleTheme =this.handleTheme.bind(this);
      this.mystyle= createRef();
      this.explicit =createRef();
    }

    handleTheme(){
      let temp=this.state[this.mystyle.current.value];
      this.setState({current:temp});
      this.explicit.current.style.width ="300px";
      this.explicit.current.style.height="300px" ;
    }

    render(){
        return(
            <div>
            <h1>About Component</h1>
            <select ref={this.mystyle} onChange={this.handleTheme}>
                <option value="theme1">Theme1</option>
                <option value="theme2">Theme2</option>
                <option value="theme3">Theme3</option>
            </select>
            <div id="about-box" style = {this.state.current} ref={this.explicit}>

            </div>
            </div>
        ) 
    }


    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevProps,prevState);
        if(this.mystyle.current.value === "theme3")
        {
            this.explicit.current.style.width ="500px";
            this.explicit.current.style.height="400px" ;
            return {status:"Manipulated"};
        }
        return {status:"Un Manipulated"};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(snapshot)
    }

    componentWillUnmount(){
        console.log("About is destroyed")
    }

    
}

export default About;
import React,{Component} from 'react';
 
class Agenda extends Component{
    render(){
        //push
        const pushfunction =() =>{
            console.log("push function",this.props)
            this.props.history.push({pathname:"./Test"});
        }
        //Go
        const gofunction =() =>{
            console.log("go function",this.props)
            this.props.history.go(-2);
        }
        const gobackfunction =() =>{
            console.log("goback function",this.props)
            this.props.history.goBack();
        }
        const replacefunction =() =>{
            console.log("replace function",this.props)
            this.props.history.replace("./Test");
        }
        const goForwardfunction =() =>{
            console.log("goforward function",this.props)
            this.props.history.goForward();
        }

        return(
            <div>
            <h2>booking.....</h2>
           
            <button className="btn btn primary"  onClick={()=>pushfunction()}>PUSH</button>
            <button className="btn btn primary"  onClick={()=>gofunction()}>GO</button>
            <button className="btn btn primary"  onClick={()=>gobackfunction()}>goBack</button>
            <button className="btn btn primary"  onClick={()=>replacefunction()}>replace</button>
            <button className="btn btn primary"  onClick={()=>goForwardfunction()}>goForward</button>
            </div>
        )
    }
}
 export default Agenda;
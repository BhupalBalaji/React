class Parent extends React.Component{
    state={
        state:0
        
    }
    render(){
        return <div>
            
            <p>state: {this.state.state}</p>
            <Child action={this.getDataFromChild.bind(this)}/>
        </div>
    }

    //choclate
    getDataFromChild(childData){
        console.log(childData);
        this.setState({text:this.state.state++})
            
    }


}
function Child(props){
    
    let str='myname';
    return <div>
        {/* <h1> I'm child.</h1> */}
        <button  onClick={()=>{props.action(str)}}>Send data to a Parent.</button>
    </div>
}

ReactDOM.render(<Parent/>,document.getElementById('container'))
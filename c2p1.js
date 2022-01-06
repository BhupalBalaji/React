class Parent extends React.Component{
    state={
        text:''
    }
    render(){
        return <div>
            <h1> Welcome</h1>
            <p>Data from child : {this.state.text}</p>
            <Child action={this.getDataFromChild.bind(this)}/>
        </div>
    }

    //choclate
    getDataFromChild(childData){
        console.log(childData);
        this.setState({text:childData})
            
    }


}
function Child(props){
    let str='I need books';
    return <div>
        <h1> I'm child.</h1>
        <button  onClick={()=>{props.action(str)}}>Send data to a Parent.</button>
    </div>
}

ReactDOM.render(<Parent/>,document.getElementById('container'))
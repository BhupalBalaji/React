class Geeks extends React.Component{
    state={
        firstName:'ABC',
        age:8
    }
    render(){
        return <div>
        <p> Welcome, {this.state.firstName} Age:{this.state.age}</p>
        <button onClick={()=>this.changeName()}>Click to Change Name</button>
        </div>
    }
    changeName(){

        console.log('before :',this.state.firstName);
        this.setState({
            firstName:'XYZ',
            age:18
            
        },()=>{
        console.log('After :',this.state.firstName);
    })


        //NEVER EVER MUTATE STATE LIKE THIS

        // console.log('before :',this.state.firstName);
        // this.state.firstName='Bindu'
        // console.log('After :',this.state.firstName);
    }
    
}

ReactDOM.render(<Geeks/>,document.getElementById('container'))
class Welcome extends React.Component{
    render(){
        return <div>
            <h1>Welcome,{this.props.firstName}</h1>
            <button onclick={()=>{this.getData}}>click me</button>
            <button onclick={()=>{this.getName}}>Get Name</button>
            <button onclick={()=>{this.getAge}}>Get Age</button>
        </div>
    }
    getData(){
        console.log('getData is executed');
    }
    getName(){
        console.log(this);
    }
    getAge(){
        console.log(data);
    }
    
}

ReactDOM.render(<Welcome firstName="sinchan"/>,document.getElementById('container'))
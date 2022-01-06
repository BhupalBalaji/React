function MyApp(){
    const [user,setuser]=React.useState({
        userName:'',
        password:''
    })
    let updateUserName=(event)=>{
        //console.log(event.target.value);
        setuser({
            ...user,
            UserName:event.target.value
        })
    }
    
    let updatepassword=(event)=>{
        //  console.log(event.target.value);
        setuser({               
             ...user,
            password:event.target.value
        })
    }        
        
    let login=(event)=>{
        event.preventDefault();
        console.log(user);
        //to clear the input fields after clicking login
        setuser({
            userName:'',
            password:''

        })
    }
    
    return <form>
        userName:<input type="text" value={user.UserName} onChange={(event)=>{updateUserName(event)}}/>
        <br/>
        <br/>
        password:<input type="password" value={user.password} onChange={(event)=>{updatepassword(event)}}/>
        <br/>
        <br/>
        <button onClick={login}>login</button>
    </form>
}
ReactDOM.render(<MyApp/>,document.getElementById('container'))
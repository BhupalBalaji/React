function MyApp(){
    const [person,setperson]=React.useState({
        firstName:"ajay",
        secondName:"k"
    })
    let updateFirstName=()=>{
        //never update state like below using React hooks for objects
        //setperson({
         //   firstName:"sujay",
            
       // })
//always update the data like below never do like above
        setperson({
            ...person,
            firstName:"sujay",
            
        })
    
    }
    
    return <div>
        <p>FirstName:{person.firstName}</p>
        <p>LastName:{person.secondName}</p>
        <button onClick={updateFirstName}>update firstName</button>

    </div>
}
ReactDOM.render(<MyApp/>,document.getElementById('container'))
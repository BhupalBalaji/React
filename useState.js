//react hooks
//it should be written at the top 

function MyApp(){
   
  const [Name,setName]=React.useState('ajay')
  const [Age,setAge]=React.useState('22')

  let updateName=()=>{
        setName("balaji")
      setAge("25")
  } 

   return <div>
        <h1>Welcome,{Name},{Age}</h1>
        <button onClick={()=>{updateName()}}>Update Name</button>
    </div>
}
ReactDOM.render(<MyApp/>,document.getElementById('container'))
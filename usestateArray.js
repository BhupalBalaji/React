function MyApp(){
    const [alphas,setalphas]=React.useState(['A','B','C','D'])
    
    let removeA=()=>{
        let indexOfA=alphas.indexOf('A')
        console.log(indexOfA);
       
        if(indexOfA >=0){
            alphas.splice(indexOfA,1)
            setalphas(
                [...alphas]
        )}
    }
    return <div>
        {
            alphas.map((alpha,idx)=>{
                return <p key={idx+alpha}>{alpha}</p>
            })
        }
        <button onClick={removeA}>Remove A</button>
    </div>
}
ReactDOM.render(<MyApp/>,document.getElementById('container'))
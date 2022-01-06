//parent component
function App(props){
    return <div>
        <h1>Wecome </h1>
        <Home appName='ReactJS' userName={props.loggiedInUser}/>
    </div>
}

//child component
function Home(props){
    return<div>
        <h1>Home Page {props.appName}</h1>
        <h2> Name of the user:{props.userName}</h2>
    </div>
}

ReactDOM.render(<App loggiedInUser='USer'/>
    ,document.getElementById('container'))
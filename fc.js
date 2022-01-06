function Header(){
    return <h1 className='some'>I M HEADER </h1>
}
function Content(props){
    console.log(props);
    return <p>I M CONTENT {props.userName}</p>
}

function Footer({person}){
    
    return <p className='B'>I M FOOTER {person.userName} {person.userName1}</p>
}




ReactDOM.render(<div>
<Header />
<Content userName="amit" />
<Content />
<Footer person={{userName:'amit' ,userName1:'kumar'}}/>
</div>,document.getElementById('container'))
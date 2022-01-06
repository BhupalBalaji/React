//to create class component

class Header extends ReadableStreamDefaultController.Component{
    render(){
        return <p>Hello</p>
    }
}

class Content extends React.Component{
    render(){
        return <h4>hello dear {this.props.firstName} {this.props.secondName}</h4>
    }
}
ReactDOM.render(<div>
    <Header />
{/* props in content component*/}
    <Content firstName="Balaji" secondName="Bhupal"/>
    <Content />
    </div>,document.getElementById('container'))
class MyApp extends React.Component{
    state={
        adminName:'Gana',
        userName:'Amy',
        isAdmin:true
    }
    render(){
        
        let{adminName,userName,isAdmin}=this.state;
        let renderData=null
        if(isAdmin){
            renderData=<div>
                <p>ADMIN NAME: {this.adminName}</p>
                <p>HOME</p>
                <p>LOGIN</p>
            </div>
        
        }
        else{
            renderData=<div>
                <p>USER NAME:{this.userName}</p>
                <p>LOGIN</p>
                
            </div>
        }
        return<div>
                 {renderData}
                 <button onClick={()=>this.changeAdminUserView()}>{isAdmin ? "Click To see User View":"Click To see Admin View"}</button>
        </div>
    }
    changeAdminUserView(){
        // if(this.state.isAdmin){
        //     this.setState({isAdmin:false})
        // }
        // else{
        //     this.setState({isAdmin:true})
        // }
        this.setState({isAdmin:!this.state.isAdmin})
    }
}

ReactDOM.render(<MyApp/>,document.getElementById('container'))
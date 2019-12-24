import { Component } from 'react';
import Auth from '../components/Auth/Auth';
import Dashboard from '../components/Dashboard/Dashboard';

class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            user : true
        }
    }

    logOut = ()=>{
        this.setState({user: false});
    }

    render(){
        return (
            <div>
                {(this.state.user) ? <Dashboard pageTitle="Dashboard - EazyRent" route="main" logout={this.logOut}/> : <Auth/>}
            </div>
        );
    }
}

export default App;
import React,{Component} from 'react';
import UsersList from './UsersList';
import AddUser from './AddUser';
import {Provider} from './Context';
import AddPublication from './AddPublication';

class App extends Component {
    state = {
        post_found:true,
        new_user:false,
        new_user_real : false
    }
    addNewUser = (id,name,email) => {
        if(this.state.post_found){
            this.setState({
                new_user:{id:id,title:name,year:email}
            });
        }
        else{
            this.setState({
                post_found:true
            });
        }
        
    }

    addNewUserReal = (id,name,email) => {
            this.setState({
                new_user_real:{id:id,user_name_real:name,user_email_real:email}
            });
    }

    postShow = (show) => {
        this.setState({
            post_found:show
        })
    }
    
    render(){
        const contextValue = {
            new_user:this.state.new_user,
            addNewUser:this.addNewUser,
            addNewUserReal:this.addNewUserReal,
            post_show:this.postShow
        }

        let showUsers;
        if(this.state.post_found){
            showUsers = (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Publication Name</th>
                            <th>Publication Year</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UsersList/>
                    </tbody>
                </table>
            );
        }
        else{
            showUsers = (
                <div className="alert alert-light" role="alert">
                    <h4 className="alert-heading">No Data Found!</h4>
                    <hr/>
                    <p>Please Insert Some Data.</p>
                </div>
            );
        }
        return (
            <Provider value={contextValue}>
            <div className="container-fluid bg-light">
            <div className="container p-5">
                <div className="card shadow-sm">
                    <h1 className="card-header text-center text-uppercase text-muted">React PHP MYSQL CRUD Application</h1>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <AddUser/>
                            </div>
                            <div className="col-md-8">
                                {showUsers}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <AddPublication/>
                            </div>
                            
                        </div>
                    
                    </div>
                </div>
    
            </div>
            </div>
        </Provider>
        );
    }
}
export default App;
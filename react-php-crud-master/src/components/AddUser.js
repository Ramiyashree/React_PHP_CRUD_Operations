import React,{Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';
import { MenuItem } from '@material-ui/core';

export default class AddUser extends Component{
    static contextType = AppContext;   
 
    
    insertUser = (event) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/php-react-master/add-user.php',{
            user_name:this.pubname.value,
            user_email:this.pubyear.value
        })
        .then(function ({data}) {
            if(data.success === 1){
                
                this.context.addNewUser(data.id,this.pubname.value,this.pubyear.value);
                event.target.reset();
                // alert(data.msg);
            }
            else{
                alert(data.msg);
            }
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });

    }

    render(){
    

        return(
            <div>
            <form onSubmit={this.insertUser}>
            <div className="form-row">
                <div className="form-group col-sm-4">
                    <label className="font-weight-bold">P-Name</label>
                    <input type="text" name="username" ref={(val) => this.pubname = val} className="form-control" placeholder="Publication Name"/>
                </div>
                <div className="form-group col-sm-4">
                    <label className="font-weight-bold">P-Year</label>
                    <input type="date" name="useremail" ref={(val) => this.pubyear = val} className="form-control" placeholder="Publication Year"/>
                </div>
                
                <div className="form-group col-sm-12 text-right">
              <button type="submit" className="btn btn-primary">Add Publication</button>
                </div>
            </div>
          
        </form> 
         

        </div>    
          
        );
    }
}
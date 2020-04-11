import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import axios from 'axios'
import { Link } from 'react-router-dom';

class Sighup extends React.Component {
    state={
        name:'',
        email:'',
        contactnumber:'',
        description:'',
        password:'',
        massage:'',
        errorLog:''
    }


  changeHandler=(event)=>{
    event.preventDefault()
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  submitHandler=(event)=>{
        const {email, password ,name, contactnumber , description}=this.state
        axios.post('/signup',{name,email, password,contactnumber,description})
        .then(res=>{
            console.log(res.data)
            this.setState({massage:res.data.massage})
        })
        .catch(err=>{
            this.setState({errorLog:err.response.data.massage})
        })
    }
    componentDidMount(){
        window.localStorage.removeItem('application_data')
    }
    render(){
        return(
            <div className="col-md-6 mx-auto">
                {this.state.massage?
                <Card className="mt-5">
                    <CardActionArea>
                        <CardContent>
                            <h1 className="text-center"> {this.state.massage} </h1>
                            <Link className="text-center" to='/login'>Login</Link>
                        </CardContent>
                    </CardActionArea>
                </Card>:

<div className="max-auto w-100 pt-5">
                <div className="card mt-5">
                <h5 class="card-header MuiAppBar-colorPrimary white-text text-center py-4">
  <h3>Sign Up</h3>
 </h5>
                <div className="card-body px-lg-5 pt-0">

                            <form >

                                <b className="text-warning"> {this.state.errorLog?this.state.errorLog:''} </b>
                                <p className="text-warning"> {this.state.massage} </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Input onChange={this.changeHandler} className="form-control mt-3" placeholder="Name" name="name" value={this.state.name} />
                                    </div>
                                    <div className="col-md-6">
                                        <Input onChange={this.changeHandler} className="form-control mt-3" placeholder="Email" name="email" value={this.state.email} />
                                    </div>
                                </div>
                                <textarea
                                    rows="5"
                                    onChange={this.changeHandler}
                                    className="form-control mt-3"
                                    placeholder="Description"
                                    name="description"
                                    value={this.state.description}
                                />
                                <div className="row">
                                    <div className="col-md-6">
                                        <Input onChange={this.changeHandler} className="form-control mt-3" placeholder="Contact Number" name="contactnumber" value={this.state.contactnumber} />
                                    </div>
                                    <div className="col-md-6">
                                        <Input onChange={this.changeHandler} className="form-control mt-3" placeholder="Password" type="password" name="password" value={this.state.password} />
                                    </div>
                                </div>
                            </form>

                    <CardActions className="py-4">
                        <button className="btn btn-primary btn-rounded text-white" onClick={this.submitHandler}>Submit</button>
                        <Link className="btn btn-primary btn-rounded text-white" to ='/login'>Login</Link>

                    </CardActions>
                </div>
                </div>
</div>
              }
            </div>
        )
    }
}

export default Sighup

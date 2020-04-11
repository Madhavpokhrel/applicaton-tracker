import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import {Link} from 'react-router-dom'
import axios from 'axios'
class Login extends React.Component {
    state={
        email:'',
        password:'',
        errorLog:''
    }

  componentDidMount(){
      window.localStorage.removeItem('application_data')
  }
  changeHandler=(event)=>{
    event.preventDefault()
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  submitHandler=(event)=>{
      const {email, password}=this.state
      axios.post('/login',{email, password})
      .then(res=>{
          localStorage.setItem('application_data',res.data)
          window.location.href='/home'
      })
      .catch(err=>{
          this.setState({
              errorLog:err.response.data.error
          })
          console.log(err.response.data.error)
      })
    }
    render(){
        return(
          <div className="center-position">
           <div className="col-md-4 offset-md-4 mt-5 pt-5">
                <Card  className="mt-5">
                    <CardActionArea>
                        <CardContent>
                        <form className="custom-inputform">
                            <h3>Login</h3>
                            <b className="text-warning"> {this.state.errorLog?this.state.errorLog:''} </b>
                            <Input onChange={this.changeHandler} className="form-control mt-3" placeholder="Email" name="email" value={this.state.email} />

                                       <Input onChange={this.changeHandler} className="form-control mt-3" placeholder="Password" type="password" name="password" value={this.state.password} />





                        </form>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <div className="login-button pb-5">

                        <button className="btn btn-primary btn-rounded text-white"  onClick={this.submitHandler}>Login</button>
                        <Link className="ml-3 btn btn-primary btn-rounded text-white" to ='/signup'>Sign Up</Link>
                        </div>
                    </CardActions>
                </Card>
            </div>
            </div>
        )
    }
}

export default Login

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
class Contact extends React.Component {
    componentDidMount(){

        if(!window.localStorage.getItem('application_data')){
            window.location.href='/login'
        }
    }
    render(){
        return(
            <div className="col-md-6 offset-md-4">
                <Card  className="mt-5">
                    <CardActionArea>
                        <CardContent>
                            <form >
                                <h3>Contact Us</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Input onChange={()=>{}} className="form-control mt-3" placeholder="Name" name="name"  />
                                    </div>
                                    <div className="col-md-6">
                                        <Input onChange={()=>{}} className="form-control mt-3" placeholder="Email"   />
                                    </div>
                                </div>
                                <textarea
                                    rows="5"
                                    onChange={()=>{}}
                                    className="form-control mt-3"
                                    placeholder="Description"
                                    name="description"
                                />
                                <div className="row">
                                    <div className="col-md-6">
                                        <Input onChange={()=>{}} className="form-control mt-3" placeholder="Contact Number" name="contactnumber" />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">Send</Button>
                        <Link to ='/login'>Cancel</Link>

                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Contact

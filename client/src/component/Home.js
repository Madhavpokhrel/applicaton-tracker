import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios'
import {Link} from 'react-router-dom'
class Home extends React.Component {
    state={
        application:[]
    }
    componentDidMount(){
        if(!window.localStorage.getItem('application_data')){
            window.location.href='/login'
        }
        Axios.get('/all')
        .then(res=>{
            this.setState({application:res.data})
        })
        .catch(err=>{
            console.log(err.response.data)
        })
    }
     delete=(id)=>{
        Axios.get('/delete/'+id)
        .then(res=>{
            console.log(res.data)
            Axios.get('/all')
            .then(res=>{
                this.setState({application:res.data})
            })
            .catch(err=>{
                console.log(err.response.data)
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div className="col-md-6 mx-auto mt-5 mb-5 ">
                {this.state.application.length<1?
                <Card className="mt-5">
                    <CardContent>
                        <h2 className="text-center">No application added yet !</h2>
                    </CardContent>
                </Card>:""
                }
                {
                    this.state.application.map(single=>{
                        return(
                          <div className="card mb-5 pb-3">
                              <div className="view overlay">
                                  <img src={require(`../uploads/${single.img}`)} className="card-img-top" />
                                  <a href="#!">
                                      <div className="mask rgba-white-slight"></div>
                                  </a>
                              </div>

                              <div className="card-body mx-4">

                                  <h4 className="card-title">
                                      <strong> {single.title}</strong>
                                  </h4>
                                    <hr></hr>

                                  <p className="dark-grey-text mb-3">{single.description}</p>

                                  <div class="d-flex justify-content-between py       -4">
                                      <button className="btn btn-primary text-white">
                                          <Link className="text-white" to={`/edit?id=${single._id}&id=${single._id}`}> <span>Edit</span></Link></button>
                                      <button onClick={this.delete.bind(this, single._id)} className="btn btn-danger text-white"><span>Delete</span></button>
                                  </div>


                              </div>
                          </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Home

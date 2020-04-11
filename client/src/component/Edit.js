import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import queryString from 'querystring'
import axios from 'axios'
import {Link} from  'react-router-dom'
class Edit extends React.Component {
    state={
        title:'',
        description:'',
        application:'',
        id:'',
        success:''
    }

  componentDidMount(){

    if(!window.localStorage.getItem('application_data')){
        window.location.href='/login'
    }
  }
//   onFileChoose=(event)=>{
//     console.log(event.target.files[0].name)
//     console.log(event.target.files[0].name)
//     console.log(event.target.files[0])
//     this.setState({
//       file : event.target.files[0],
//       label:event.target.files[0].name
//     })
//     console.log(this.state)
//   }

  changeHandler=(event)=>{
    event.preventDefault()
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  submitHandler=(event)=>{
//     const formData=new FormData()
//    formData.append('title', this.state.title)
//    formData.append('description', this.state.description)
//    formData.append('file', this.state.file)
//    console.log(this.state)
    let { title, description,id}  = this.state
    axios.post('/edit',{title,description,id})
    .then(res=>{
        this.setState({success:res.data.massage})
    })
    .catch(err=>{
        console.log(err)
    })
}
componentDidMount=()=>{
    let pars= queryString.parse(window.location.search)
    let id=pars.id
    this.setState({id:id})
    axios.get('/single/'+id)
    .then(res=>{
        console.log(res.data)
        this.setState({
            title:res.data.title,
            description:res.data.description,
        })
    })
    .catch(err=>{
        console.log(err)
    })

}

    render(){
        return(
            <div className="col-md-6 offset-md-3 text-center">
                {this.state.success?
                <Card className="mt-5">
                    <CardContent>
                        <h3 className="text-center"> {this.state.success} </h3>
                        <Link  to='/home'>Go To Home</Link>
                    </CardContent>
                </Card>:

                <Card  className="mt-5">
                    <CardActionArea>
                        <CardContent>
                            <form >
                                <div className="m-3">
                                    <h3 >Edit Application</h3>
                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <Input
                                                name="title"
                                                value={this.state.title}
                                                onChange={this.changeHandler}
                                                placeholder="Enter Title"
                                                className="form-control"
                                            />
                                        </div>
                                        {/* <div className="col-md-6">
                                            <div className="custom-file">
                                                <input
                                                    name="file"
                                                    type="file"
                                                    onChange={this.onFileChoose}
                                                    className="custom-file-input"
                                                    id="customFile"
                                                />
                                                <label className="custom-file-label" for="customFile"> {this.state.label} </label>
                                            </div>
                                        </div> */}
                                    </div>
                                    <textarea
                                        placeholder="Enter Description "
                                        name="description"
                                        value={this.state.description}
                                        className="form-control"
                                        onChange={this.changeHandler}
                                        rows="5"
                                    />
                                </div>
                            </form>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={this.submitHandler}>Update</Button>
                        <Button size="small" color="primary" onClick={this.submitHandler}><Link to='/home'>Cancel</Link></Button>
                    </CardActions>
                </Card>}
            </div>
        )
    }
}

export default Edit

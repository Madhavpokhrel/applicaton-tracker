import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import Axios from 'axios'
import { Link } from 'react-router-dom';

class Add extends React.Component {
    state={
        title:'',
        description:'',
        file:{},
        label:'Choose a Image',
        success:''
    }


  onFileChoose=(event)=>{
    console.log(event.target.files[0].name)
    console.log(event.target.files[0].name)
    console.log(event.target.files[0])
    this.setState({
      file : event.target.files[0],
      label:event.target.files[0].name
    })
    console.log(this.state)
  }

  changeHandler=(event)=>{
    event.preventDefault()
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  submitHandler=(event)=>{
    const formData=new FormData()
   formData.append('title', this.state.title)
   formData.append('description', this.state.description)
   formData.append('file', this.state.file)
   Axios.post('/create',formData)
   .then(res=>{
       this.setState({success:res.data.massage})
   })
   .catch(err=>{
       console.log(err.response.data)
   })
}
componentDidMount(){

    if(!window.localStorage.getItem('application_data')){
        window.location.href='/login'
    }
}

    render(){
        return(
            <div className="col-md-6 offset-md-3 p-3">
                {this.state.success?
                <div className="col-md-6 offset-md-3">
                    <CardContent>
                        <h4 className="text-center"> {this.state.success} </h4>
                        <Link to='/home'>Go To Home</Link>
                    </CardContent>
                </div>
                :
                <Card  className="mt-5">
                    <CardActionArea>
                        <CardContent>
                            <form >
                                <div className="m-3">
                                    <h3 >Add Application</h3>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <Input
                                                name="title"
                                                value={this.state.title}
                                                onChange={this.changeHandler}
                                                placeholder="Enter Title"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-6">
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
                                        </div>
                                    </div>
                                    <textarea
                                        placeholder="Enter Description "
                                        name="description"
                                        value={this.state.descriptoin}
                                        className="form-control"
                                        onChange={this.changeHandler}
                                        rows="5"
                                    />
                                </div>
                            </form>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={this.submitHandler}>Submit</Button>
                    </CardActions>
                </Card>}
            </div>
        )
    }
}

export default Add

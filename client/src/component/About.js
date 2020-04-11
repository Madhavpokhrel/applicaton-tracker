import React, { PureComponent } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
export default class About extends PureComponent {
    componentDidMount(){
        if(!window.localStorage.getItem('application_data')){
            window.location.href='/login'
        }
    }
    render() {
        return (
            <div className="col-md-6 offset-md-3">

                <Card  className="mt-5">
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h3" component="h2">
                                    About This Application
                                </Typography>
                                <div>
                                  This application allow user to create an account and store the numbers of job Application.
                                </div>
                                <Typography variant="body2" color="textSecondary" className="mt-4" component="p">
                                    <h5>Description : </h5>
                                      In order to use this application, User 1st need to create an application.
                                      Then, they are able to add the any number of applicaiton into their account.


                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">Share</Button>
                                <Button size="small" color="primary"><span>Like</span></Button>
                            </CardActions>
                        </Card>
            </div>
        )
    }
}

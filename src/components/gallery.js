import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import Nature from './nature';
import Portrait from './portrait';


class Gallery extends Component{
  constructor(props){
    super(props);
    this.state = { activeTab: 0 }
    }
toggleCategories(){
  if(this.state.activeTab === 0){
    return(
      <Card shadow={5} style={{minWidth: '450', margin: 'auto', textAlign: 'center'}}>
        <CardTitle style={{color: 'black'}}>Portrait</CardTitle>
        <CardText>The Portrait series represents blah. </CardText>
        <CardActions border>
        <Portrait />
      </CardActions>
        <CardMenu style={{color: '#fff'}} >
          <IconButton name='share'/>
        </CardMenu>
    </Card>
    )
  } else if(this.state.activeTab === 1){
    return(
      <Card shadow={5} style={{minWidth: '450', margin: 'auto', textAlign: 'center'}}>
        <CardTitle style={{color: 'black'}}>Nature</CardTitle>
        <CardText>The Nature series represents blah. </CardText>
        <CardActions border>
          <Nature />
        </CardActions>
        <CardMenu style={{color: '#fff'}} >
          <IconButton name='share'/>
        </CardMenu>
    </Card>
    )
  }
}


  render(){
    return(
        <div className='category-tabs'>
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple >
            <Tab><button className='Buttons' style={{marginRight: '2em', marginLeft: '3em', marginTop: '1em'}} type="button" class="btn btn-info">Portrait</button></Tab>
            <Tab><button className='Buttons' style={{marginRight: '2em', marginTop: '1em'}} type="button" class="btn btn-info">Nature</button></Tab>
          </Tabs>

            <Grid className='projects-grid'>
              <Cell col={12}>
              <div className='content'>{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </div>

    )
  }
}

export default Gallery;

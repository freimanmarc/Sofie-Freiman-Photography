import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Sofie Freiman</h2>
            <img id="sofie" src={process.env.PUBLIC_URL + '/sofie.jpeg'} alt="avatar"/>
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              <h5>Bio</h5>
              Born in Mexico City to immigrant parents from Germany and Russia, I grew up in multicultural environment where Engilsh was spoken at home, while Spanish was the main language at School.
              Afer getting married I moved to Chicago where I worked at a restaurant and kindergarden.
              Fast forward 30 years, in 2016 I started my career as a photographer.
            </p>
          </Cell>
          <Cell col={6}>
            <hr />
            <h2>Contact Me</h2>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/> <br />
                    +521 (55)5506-1772
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/> <br />
                    sbdef@prodigy.net
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fab fa-linkedin-in" style={{color: 'black'}} aria-hidden="true"/> <br />
                    Sofie Freiman

                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;

import React, {Component} from 'react'

class Home extends Component{
  render(){
    return(
        <div className="landing-grid">
          <img className="home" src={process.env.PUBLIC_URL + '/home.jpeg'} alt="pictures"
            alt='home-img'/>
          <img className="home" src={process.env.PUBLIC_URL + '/home2.jpeg'} alt="pictures"
            alt='home-img'  />
          <img className="home" src={process.env.PUBLIC_URL + '/home3.jpeg'} alt="pictures"
            alt='home-img'    />
      </div>
    )
  }
}

export default Home;

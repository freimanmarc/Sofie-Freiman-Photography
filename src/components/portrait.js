import React, {Component} from 'react';

class Portrait extends Component{
  render(){
    return(
      <div className='portrait-img'>
        <img src={process.env.PUBLIC_URL + '/split.jpeg'} />
        <img src={process.env.PUBLIC_URL + '/viejo.jpeg'} />
        <img src={process.env.PUBLIC_URL + '/indios.jpeg'} />
        <img style={{width: "75%"}}src={process.env.PUBLIC_URL + '/katrina.jpeg'} />
      </div>
    )
  }
}

export default Portrait;

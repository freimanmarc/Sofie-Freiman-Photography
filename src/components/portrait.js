import React, {Component} from 'react';

class Portrait extends Component{
  render(){
    return(
      <div className='portrait-img'>
        <img style={{width: "100%"}} src={process.env.PUBLIC_URL + '/split.jpeg'} />
        <img style={{width: "100%"}} src={process.env.PUBLIC_URL + '/viejo.jpeg'} />
        <img style={{width: "100%"}} src={process.env.PUBLIC_URL + '/indios.jpeg'} />
        <img style={{width: "100%"}} src={process.env.PUBLIC_URL + '/katrina.jpeg'} />
      </div>
    )
  }
}

export default Portrait;

import React, {Component} from 'react';

class Nature extends Component{
  render(){
    return(
      <div className='nature-img'>
        <img src={process.env.PUBLIC_URL + '/spider.jpeg'} />
        <img src={process.env.PUBLIC_URL + '/focas.jpeg'} />
        <img src={process.env.PUBLIC_URL + '/rusty.jpeg'} />
        <img src={process.env.PUBLIC_URL + '/bote.jpeg'} />
      </div>
    );
  }
}

export default Nature;

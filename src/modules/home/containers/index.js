import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imageStyle = {
      width: 400
    };
    return (
      <div>
        <p>Home</p>
        <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" />
      </div>
    );
  }
}

export default Home;

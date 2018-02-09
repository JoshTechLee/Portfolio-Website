
import React, { Component } from 'react';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      talk: ''
    }
  }

  render() {
    return (
      <div className="Title">
        <div className="contact-back">
          <div className='contact-front'>
            <h2>Contact</h2>
            <div className='icons'>
              <a href='https://www.linkedin.com/in/joshua-lee-24a662112/' target='_blank'>
                <div id='linkedin' onMouseEnter={()=>this.setState({talk:'LinkedIn'})}
                  onMouseLeave={()=>this.setState({talk:''})}></div>
              </a>
              <a href='https://github.com/joshjinlee' target='_blank'>
                <div id='github' onMouseEnter={()=>this.setState({talk:'GitHub'})}
                  onMouseLeave={()=>this.setState({talk:''})}></div>
              </a>
              <a href='https://drive.google.com/open?id=1Y7uYniyWjvhQfXC340opDawwssFb9din' target='_blank'>
              <div id='resume' onMouseEnter={()=>this.setState({talk:'Resume'})}
                onMouseLeave={()=>this.setState({talk:''})}></div>
              </a>
              <a href='mailto:joshua_jin_lee@live.com?'>
              <div id='mail' onMouseEnter={()=>this.setState({talk:'Mail'})}
                onMouseLeave={()=>this.setState({talk:''})}></div>
              </a>
            </div>
            <h3>{this.state.talk}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

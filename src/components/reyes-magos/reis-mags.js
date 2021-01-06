import React from 'react';
import './reyes-magos.scss';
import ImageRM from './reyes-magos.jpg' 
import ImageM from './mochila.jpg'

export default function ReyesMagosMain() {
      return (
        
        <div className="page-container"> 
          <BlogCard />
         {/* <footer>
            <a>Reyes magos 2020</a>
         </footer>*/}
        </div>
        
        
      );
    }

  
  class BlogCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = { flipped: false };
      this.flip = this.flip.bind(this);
    }
  
    flip = () => {
      this.setState({ flipped: !this.state.flipped });
    }
    render() {
      return (
  
  
        <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>
  
          <Front />
          <Back />
        </div>
  
      )
    }
  }
  
  class Front extends React.Component {
    render() {
      return (
        <div className="front">
          <ImageArea />
          <MainArea />
        </div>
      )
    }
  }
  
  class Back extends React.Component {
    render() {
      return (
        <div className="back">
         <img className="card-image-2" src={ImageM} />
        </div>
      )
    }
  }
  
  class ImageArea extends React.Component {
    render() {
      return (
        <div className="image-container">
          <img className="card-image" src={ImageRM} />
          {/*<h1 className="title">Laura, tu regalo de parte de los reyes magos 2020</h1>*/}
        </div>
      )
    }
  
  }
  
  class MainArea extends React.Component {
    render() {
      return (
        <div className="main-area">
          <div className="blog-post">
            {/*<p className="date">{new Date().toLocaleDateString()}</p>*/}
            <p className="blog-content">
              <b>REIS MAGS 2021</b>
              </p>
            <p className="blog-content">
               Laura, aquest any a causa dels problemes amb la COVID-19 hem preferit donar-te el regal d'aquesta manera. Esperem que t'agradi.!!!
              </p>
              <p className="blog-content">
               Firmat: Els reis mags d'orient. 🎁🎄
              </p>
            {/*<p className="read-more">Hover to read more...</p>*/}
  
          </div>
  
        </div>
      )
    }
  }

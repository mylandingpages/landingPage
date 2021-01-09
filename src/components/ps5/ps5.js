import React from 'react';
import ImageR from './ps5.jpg';
import ImageRPS5 from './ps5im.jpg';
import './ps5.scss';

export default function Ps5Main() {
      return (
        
        <div className="page-container-2"> 
          <BlogCard />
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
  
  
        <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container-2" + (this.state.flipped ? " flipped" : "")}>
  
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

    goOfferURL() {
      window.location.href='https://3hexx.bemobtrcks.com/click'
      //window.location.href='https://www.google.com'
    }
    render() {
      return (
        <div className="back">
         <img className="card-image"  src={ImageRPS5}/>
         <button className="bttn" onClick={this.goOfferURL} >PARTICIPAR</button>
        </div>
      )
    }
  }
  
  class ImageArea extends React.Component {
    render() {
      return (
        <div className="image-container">
          <img className="card-image" src={ImageR} />
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
              <h3>TU REGALO</h3>
              </p>
            <p className="blog-content">
               Entra en un sorteo de forma gratuita únicamente respondiendo a unas preguntas para conseguirlo.
            </p>
            <p className="blog-content">
               <b>HAZ CLICK PARA DESCUBRIRLO</b>
              </p>
            {/*<p className="read-more">Hover to read more...</p>*/}
  
          </div>
  
        </div>
      )
    }
  }

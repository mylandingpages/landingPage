import React from 'react';
import './SlotMachine.css';

let objecSelected = 0;
let firstLoad = 0;
export default class SlotMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null
    }
    this.finishHandler = this.finishHandler.bind(this)
    this.handleClick = this.handleClick.bind(this);
    this.goOfferURL = this.goOfferURL.bind(this);
  }

  handleClick() {
    this.setState({ winner: null });
    this.emptyArray();
    this._child1.forceUpdateHandler();

  }

  goOfferURL() {
    console.log('WTF')
    window.location.href='http://www.google.com'
  }
  static loser = [
    'Hey, you lost!',
  ];

  static matches = [];

  finishHandler(value) {
    SlotMachine.matches.push(value);
    objecSelected = value;
    // Modificado a 6 para que nunca gane y result false
    //console.log(`value`+value+`&firstLoad`+firstLoad+`&objectSelected`+objecSelected);
    this.forceUpdate();
    if (SlotMachine.matches.length === 6) {
      const { winner } = this.state;
      const first = SlotMachine.matches[0];
      let results = false //SlotMachine.matches.every(match => match === first)
      this.setState({ winner: results });
    }

}

  emptyArray() {
    SlotMachine.matches = [];
  }

  render() {
    const { winner } = this.state;
    const getLoser = () => {
      return SlotMachine.loser[Math.floor(Math.random() * SlotMachine.loser.length)]
    }
    let repeatButton = null;


    if (winner !== null) {

    }

    if (winner) {

    }

    return (
      <>
      <div className={`text-container`} onClick={this.handleClick}>JUEGA en la ruleta para conocer a una de estas chicas en nuestra web!</div>
        <div className={`spinner-container`}>
          <Spinner onFinish={this.finishHandler} ref={(child) => { this._child1 = child; }} timer="1000" />
          <div className="gradient-fade"></div>
        </div>
        {(firstLoad == 0 || objecSelected == 0) ? <button className={`button-container`} onClick={this.handleClick}>ELEGIR CHICA</button> : <button className={`text-match-container`} onClick={this.goOfferURL}>Para ver más fotos...<br/>CLICK AQUÍ!</button>}
      </>
    );
  }
}


class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };

  forceUpdateHandler() {
    this.reset();
  };

  reset() {
    if (this.timer) {
      clearInterval(this.timer);
    }

      this.start = this.setStartPosition();


    this.setState({
      position: this.start,
      timeRemaining: this.props.timer
    });

    this.timer = setInterval(() => {
      this.tick()
    }, 100);


  }

  state = {
    position: 0,
    lastPosition: null
  }

  static iconHeight = 188;
  multiplier = Math.floor(Math.random() * (4 - 1) + 1);
  start = this.setStartPosition();
  speed = Spinner.iconHeight * this.multiplier * 100;

  setStartPosition() {
    return ((Math.floor((Math.random() * 9))) * Spinner.iconHeight) * -1;
  }

  moveBackground() {
    this.setState({
      position: this.state.position - this.speed,
      timeRemaining: this.state.timeRemaining - 100
    })
  }

  getSymbolFromPosition() {
    let { position } = this.state;
    const totalSymbols = 9;
    const maxPosition = (Spinner.iconHeight * (totalSymbols - 1) * -1);
    let moved = (this.props.timer / 100) * this.multiplier
    let startPosition = this.start;
    let currentPosition = startPosition;

    for (let i = 0; i < moved; i++) {
      currentPosition -= Spinner.iconHeight;

      if (currentPosition < maxPosition) {
        currentPosition = 0;
      }
    }

    this.props.onFinish(currentPosition);
  }

  tick() {
    if (this.state.timeRemaining <= 0) {
      clearInterval(this.timer);
      this.getSymbolFromPosition();

    } else {
      this.moveBackground();
    }
  }

  componentDidMount() {

    if (firstLoad != 0) {
      console.log('SETUP SECOND TIME')
      console.log(firstLoad)
    clearInterval(this.timer);

    this.setState({
      position: this.start,
      timeRemaining: this.props.timer
    });

    this.timer = setInterval(() => {
      this.tick()
    }, 100);

  } else {

    console.log('SETUP FIRST TIME')
    console.log(firstLoad)
    firstLoad++


  }
  }

  render() {
    let { position, current } = this.state;

    return (
      <div
        style={{ backgroundPosition: '0px ' + position + 'px' }}
        className={`icons`}
      />
    )
  }
}


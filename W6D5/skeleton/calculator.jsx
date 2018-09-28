import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: "",
    }
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.addNum = this.addNum.bind(this);
    this.subNum = this.subNum.bind(this);
    this.multNum = this.multNum.bind(this);
    this.divNum = this.divNum.bind(this);
  }

  setNum1(e) {
    this.setState({num1: e.target.value});
  }

  setNum2(e) {
    this.setState({num2: e.target.value});
  }

  addNum(e){
    e.preventDefault();
    let added = parseInt(this.state.num1) + parseInt(this.state.num2);
    this.setState({result: added});
  }

  subNum(e){
    e.preventDefault();
    let sub = parseInt(this.state.num1) - parseInt(this.state.num2);
    this.setState({result: sub});
  }


  multNum(e){
    e.preventDefault();
    let mult = parseInt(this.state.num1) * parseInt(this.state.num2);
    this.setState({result: mult});
  }


  divNum(e){
    e.preventDefault();
    let div = parseInt(this.state.num1) / parseInt(this.state.num2);
    this.setState({result: div});
  }
  render(){
    return (
      <div>
        <h1>React Calculator</h1>
        <h1>{this.state.result}</h1>
        <input type="text" value={this.state.num1} onChange={this.setNum1}/>
        <input type="text" value={this.state.num2} onChange={this.setNum2}/>
        <br />
        <button onClick={this.addNum}>+</button>
        <button onClick={this.subNum}>-</button>
        <button onClick={this.multNum}>*</button>
        <button onClick={this.divNum}>/</button>
      </div>
    );
  }
}

export default Calculator;

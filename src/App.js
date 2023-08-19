import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <header>
        <img src="/banner.jpg" alt="Banner" />
      </header>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
        © {new Date().getFullYear()} Taruna Arora
      </footer>
    );
  }
}

class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 0,
      value2: 0,
      operation: '+',
      result: 0,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOperationChange = (event) => {
    this.setState({ operation: event.target.value });
  }

  calculateResult = () => {
    const { value1, value2, operation } = this.state;
    let result = 0;

    switch (operation) {
      case '+':
        result = parseFloat(value1) + parseFloat(value2);
        break;
      case '-':
        result = parseFloat(value1) - parseFloat(value2);
        break;
      case '*':
        result = parseFloat(value1) * parseFloat(value2);
        break;
      case '/':
        result = parseFloat(value1) / parseFloat(value2);
        break;
      case '**':
        result = Math.pow(parseFloat(value1), parseFloat(value2));
        break;
      default:
        break;
    }

    this.setState({ result });
  }

  render() {
    const { value1, value2, operation, result } = this.state;

    return (
      <div className="main-body">
        <input type="number" name="value1" value={value1} onChange={this.handleChange} />
        <select name="operation" value={operation} onChange={this.handleOperationChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
          <option value="**">**</option>
        </select>
        <input type="number" name="value2" value={value2} onChange={this.handleChange} />
        <button onClick={this.calculateResult}>Calculate</button>
        <SubBody result={result} operation={operation} />
      </div>
    );
  }
}

class SubBody extends Component {
  render() {
    const { result, operation } = this.props;
    let description = '';

    switch (operation) {
      case '+':
        description = `${result}`;
        break;
      case '-':
        description = `${result}`;
        break;
      case '*':
        description = `${result}`;
        break;
      case '/':
        description = `${result}`;
        break;
      case '**':
        description = `Result: ${result}`;
        break;
      default:
        break;
    }

    return (
      <div className="sub-body">
        {operation === '**' ? (
          <p>{description}</p>
        ) : (
          <p>{description}</p>
        )}
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainBody />
        <Footer />
      </div>
    );
  }
}

export default App;
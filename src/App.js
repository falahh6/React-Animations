import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    isModalOpen: false,
    showBlock: false,
  };

  ModalOpenHandler = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  ModalCloseHandler = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal show={this.state.isModalOpen} onClose={this.ModalCloseHandler} />
        <Backdrop show={this.state.isModalOpen} />
        <button className="Button" onClick={this.ModalOpenHandler}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;

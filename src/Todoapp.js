import React, { Component } from "react";
import "./Todoapp.css";

export default class Todoapp extends Component {
  state = {
    input: "",
    items: [],
  };

  handlechange = (e) => {
    this.setState({ input: e.target.value });
  };

  storeitem = (e) => {
    e.preventDefault();
    const { input } = this.state;
    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };

  deleteitem = (key) => {
    //   const allitem=this.state.items
    //   allitem.splice(key,1)

    this.setState({
      // items: allitem
      items: this.state.items.filter((data, index) => index !== key),
    });
  };

  render() {
    const { input, items } = this.state;
    console.log(items);
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeitem}>
          <h4>TODO APP</h4>
          <input
            type="text"
            value={input}
            onChange={this.handlechange}
            placeholder="Enter items..."
          />
        </form>

        <ul>
          {items.map((itm, k) => (
            <li key={k}>
              {itm}{" "}
              <i
                className="fa fa-trash"
                onClick={() => this.deleteitem(k)}
                href="#"
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

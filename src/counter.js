import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col2">
            <button
              className="btn btn-secondary btn-small m-2"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              +
            </button>
            <button
              className="btn btn-secondary btn-small m-2"
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              className="btn btn-danger btn-small m-2"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              x
            </button>
          </div>
        </div>
      </>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

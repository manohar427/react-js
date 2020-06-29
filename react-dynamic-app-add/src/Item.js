import React, { Component } from "react";
 
class Item extends Component {
  state = {
    count: this.props.item.value
  };
 
  handleIncrement = e => {
    this.setState({ count: this.state.count + 1 });
  };
 
  render() {
    return (
      <>
        <div className="card mb-2">
          <h5 className={this.styleCardHeader()}>{this.styleCount()}</h5>
          <div className="card-body">
            <button
              onClick={item => {
                this.handleIncrement({ item });
              }}
              className="btn btn-lg btn-outline-secondary"
            >
              Increment
            </button>
 
            <button
              onClick={() => this.props.onDelete(this.props.index)}
              className="btn btn-lg btn-outline-danger ml-4"
            >
              Delete
            </button>
          </div>
        </div>
      </>
    );
  }
 
  styleCardHeader() {
    let classes = "card-header h4 text-white bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
 
  styleCount() {
    const { count } = this.state;
    return count === 0 ? "No Items!" : count;
  }
}
 
export default Item;
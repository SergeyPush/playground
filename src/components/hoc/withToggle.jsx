import React, { Component } from "react";

const withToggle = WrappedComponent => {
  return class withToggle extends Component {
    state = {
      on: false
    };

    handleClickButton = () => {
      this.setState(prevState => ({
        on: !prevState.on
      }));
    };

    render() {
      return (
        <div>
          {this.state.on && <WrappedComponent {...this.props} />}
          <button type="button" onClick={this.handleClickButton}>
            {this.state.on ? "Hide" : "Display"}
          </button>
        </div>
      );
    }
  };
};

export default withToggle;

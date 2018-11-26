import React, { Component } from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";

class Button extends Component {
  static propTypes = {
    direction: PropTypes.string,
    handleClick: PropTypes.func
  };

  render() {
    return (
      <div
        className={styles[this.props.direction]}
        onClick={() => this.props.handleClick(this.props.direction)}
      >
        {this.props.direction}
      </div>
    );
  }
}

export default Button;

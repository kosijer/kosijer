import React, { Component } from "react";
import styles from "./styles.scss";
import Button from "../../Components/Button";
import PropTypes from "prop-types";

class Navigation extends Component {
  static propTypes = {
    handleClick: PropTypes.func
  };

  render() {
    return (
      <div className={styles.navigation}>
        <Button handleClick={this.props.handleClick} direction="prev" />
        <Button handleClick={this.props.handleClick} direction="next" />
      </div>
    );
  }
}

export default Navigation;

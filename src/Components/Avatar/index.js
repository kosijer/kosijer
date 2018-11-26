import React, { Component } from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";

class Avatar extends Component {
  static propTypes = {
    src: PropTypes.string
  };

  render() {
    const image = this.props.src ? (
      <img className={styles.avatar} src={this.props.src} />
    ) : (
      <div className={styles.noAvatar} />
    );
    return <>{image}</>;
  }
}

export default Avatar;

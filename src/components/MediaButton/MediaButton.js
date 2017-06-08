import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from './MediaButton.css';

class MediaButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const text = <div className={style.text}>{this.props.text}</div>;

    const icons = this.props.children.map(
      (child, index) => <div key={index} className={style.transformIcon}>{child}</div>,
    );

    return (
      <button className={style.root}>
        <div className={style.innerText}>
          {text}
          {icons}
        </div>
      </button>
    );
  }
}

export default withStyles(style)(MediaButton);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from './MediaButton.css';

const ICON_WIDTH = 25;

class MediaButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const icons = this.props.children.map(
      child => <div key={child.props.className} className={style.transformIcon}>{child}</div>,
    );

    return (
      <div className={style.root}>
        <div className={style.text}>{this.props.text}</div>
        {icons}
      </div>
    );
  }
}

export default withStyles(style)(MediaButton);

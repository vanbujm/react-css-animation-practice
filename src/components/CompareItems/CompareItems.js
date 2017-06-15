import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import style from './CompareItems.css';

class CompareItems extends Component {

  static propTypes = {
    hrefs: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
  };

  render() {
    return (
      <div className={cx(style.circleContainer)}>
        <a className={cx(style.circleOne, style.circle)} href={this.props.hrefs[0]}>
          <div className={cx(style.circleButton)}>
            <div className={cx(style.circleText)}>{this.props.children[0]}</div>
          </div>
        </a>
        <a className={cx(style.circleTwo, style.circle)} href={this.props.hrefs[1]}>
          <div className={cx(style.circleButton)}>
            <div className={cx(style.circleText, style.swapText)}>{this.props.children[1]}</div>
            <div className={cx(style.circleText, style.mainText)}>{this.props.children[2]}</div>
          </div>
        </a>
      </div>
    );
  }
}

export default withStyles(style)(CompareItems);

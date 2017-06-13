/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sun.css';

class Sun extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    className: PropTypes.string,
  };

  // className={this.props.className} width={this.props.width} height={this.props.height}
  render() {
    return (
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className={this.props.className} width={this.props.width} height={this.props.height}>
        <defs>
          <radialGradient
            id="a"
            gradientUnits="userSpaceOnUse"
            cx="242"
            cy="238.6"
            r="194.4"
            gradientTransform="matrix(.99521 -.00083 .00079 .94959 -8.013 12.809)"
          >
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#f80" />
          </radialGradient>
          <radialGradient
            id="b"
            gradientUnits="userSpaceOnUse"
            cx="253.3"
            cy="246.9"
            r="194.4"
            gradientTransform="matrix(1.25101 -.01822 .01789 1.22836 -76.194 -50.587)"
          >
            <stop offset="0" stopColor="#ffae00" />
            <stop offset="1" stopColor="#fffefc" />
          </radialGradient>
        </defs>
        <ellipse cx="243.9" cy="245.8" rx="207.8" ry="207.8" fill="url(#a)" stroke="url(#b)" strokeWidth="70" />
      </svg>
    );
  }
}

Sun.defaultProps = {
  className: '',
};

export default withStyles(s)(Sun);

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
          <pattern id="pattern-0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" viewBox="0 0 100 100">
            <path d="M 0 0 L 50 0 L 50 100 L 0 100 Z" style={{ fill: 'black' }} />
          </pattern>
          <radialGradient id="gradient-2" gradientUnits="userSpaceOnUse" cx="750.1" cy="246.7" r="194.4" gradientTransform="matrix(0.70129, -0.00058, 0.00056, 0.66914, -288.07928, 79.72377)">
            <stop offset="0" style={{ stopColor: 'rgb(255, 255, 255)' }} />
            <stop offset="1" style={{ stopColor: 'rgb(255, 136, 0)' }} />
          </radialGradient>
          <radialGradient id="gradient-1" gradientUnits="userSpaceOnUse" cx="750.1" cy="246.7" r="194.4" gradientTransform="matrix(1.15882, -0.00483, 0.00463, 1.11173, -630.70203, -24.15555)">
            <stop offset="0" style={{ stopColor: 'rgb(255, 136, 0)' }} />
            <stop offset="1" style={{ stopColor: 'rgba(255, 136, 0, 0)' }} />
          </radialGradient>
        </defs>
        <ellipse style={{ fill: 'url(#gradient-1)', strokeWidth: 70 }} cx="247.7" cy="251.4" rx="239.3" ry="239.3" />
        <ellipse style={{ fill: 'url(#gradient-2)', strokeWidth: 70 }} cx="243" cy="247.4" rx="146.5" ry="146.5" />
      </svg>
    );
  }
}

Sun.defaultProps = {
  className: '',
};

export default withStyles(s)(Sun);

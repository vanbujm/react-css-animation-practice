/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TWLogo.css';

class TWLogo extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    className: PropTypes.string,
  };


  render() {
    return (
      <svg width={this.props.width} height={this.props.height} className={this.props.className}>
        <defs>
          <radialGradient id="patricksGradient" cx="50%" cy="50%" r="100%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: '#373277', stopOpacity: 1 }} />
            <stop offset="20%" style={{ stopColor: '#373277', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 1 }} />
          </radialGradient>
        </defs>
        <rect
          x="2"
          y="2"
          rx="20"
          ry="20"
          width="100"
          height="70"
          // fill:red;stroke:black;stroke-width:5;opacity:0.5"
          style={{ fill: 'url(#patricksGradient)', stroke: 'black', strokeWidth: 2 }}
        />
        <text style={{ fill: '#373277', stroke: 'black', strokeWidth: 2, fontSize: 45, fontFamily: 'Verdana' }} x="17" y="53">TW</text>
      </svg>
    );
  }
}

TWLogo.defaultProps = {
  className: '',
};

export default withStyles(s)(TWLogo);

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TWLogo.css';

class TWLogo extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };


  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        <defs>
          <linearGradient id="patricksGradient" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" style={{ stopColor: 'hotpink', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'teal', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="patricksGradientReverse" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" style={{ stopColor: 'teal', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'hotpink', stopOpacity: 1 }} />
          </linearGradient>
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
        <text style={{ fill: 'url(#patricksGradientReverse)', stroke: 'black', strokeWidth: 2, fontSize: 45, fontFamily: 'Verdana' }} x="17" y="53">TW</text>
      </svg>
    );
  }
}

export default withStyles(s)(TWLogo);

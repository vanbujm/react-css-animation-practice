/* eslint-disable react/no-did-mount-set-state,react/no-array-index-key,max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import style from './MediaButton.css';

const ICON_WIDTH = 25;

class MediaButton extends Component {
  static propTypes = {
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]).isRequired,
    children: PropTypes.node.isRequired,
  };

  static isMiddleIndex(array, index) {
    return !(index === 0 || index === array.length - 1);
  }

  constructor(props) {
    super(props);

    this.state = {
      maxWidth: 100,
    };
  }

  componentDidMount() {
    this.setMaxWidth();
  }

  componentWillReceiveProps() {
    this.setMaxWidth();
  }

  componentDidUpdate() {
    this.setMaxWidth();
  }

  setMaxWidth() {
    const paddingWidth = 2 * ICON_WIDTH;
    if (this.divElement !== null) {
      if (this.state.maxWidth !== this.divElement.clientWidth + paddingWidth) {
        this.setState({ maxWidth: this.divElement.clientWidth + paddingWidth });
      }
    }
  }

  createButtonList(iconArray) {
    const iconArrayElement = [];

    let currentNumberOfElements = 0;

    const maxNumberOfElements = this.state.maxWidth / ICON_WIDTH;

    iconArray.forEach(
      (child, index) => {
        const optionalClass = child.props['data-parent-class'] ? child.props['data-parent-class'] : style.defaultHover;
        if (index === 0) {
          iconArrayElement.push(
            <div
              key={index}
              className={cx(style.transformIcon, style.left, optionalClass)}
            >
              {child}
            </div>,
          );
        }
        if (MediaButton.isMiddleIndex(iconArray, index)) {
          if (maxNumberOfElements - currentNumberOfElements > 1) {
            iconArrayElement.push(
              <div
                key={index}
                className={cx(style.transformIcon, optionalClass)}
              >
                {child}
              </div>);
          } else {
            iconArrayElement.push(
              <div
                key={index}
                className={cx(style.transformIcon, style.squish, optionalClass)}
              >
                {child}
              </div>);
          }
        }
        if (iconArray.length - 1 === index) {
          iconArrayElement.push(
            <div
              key={index}
              className={cx(style.transformIcon, style.right, optionalClass)}
            >
              {child}
            </div>);
        }

        currentNumberOfElements += 1;
      });

    while (currentNumberOfElements * ICON_WIDTH < this.state.maxWidth) {
      currentNumberOfElements += 1;
      iconArrayElement.splice(
        iconArrayElement.length - 1,
        0,
        <div key={currentNumberOfElements} className={cx(style.transformIcon, style.hide)} />);
    }

    return iconArrayElement;
  }

  render() {
    const icons = this.createButtonList(this.props.children);

    return (
      <div className={style.root}>
        { this.props.text &&
        <div
          className={style.text}
          ref={(divElement) => {
            this.divElement = divElement;
          }}
        >
          {this.props.text}
        </div>
        }
        {icons}
      </div>
    );
  }
}

export default withStyles(style)(MediaButton);

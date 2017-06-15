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

    let maxWidth = this.divElement !== null ? this.divElement.clientWidth + paddingWidth : paddingWidth;
    // if (ICON_WIDTH * this.props.children.length > maxWidth) maxWidth = ICON_WIDTH * this.props.children.length;

    if (this.state.maxWidth !== maxWidth) {
      this.setState({ maxWidth });
    }
  }

  createButtonList(iconArray) {
    let iconArrayElement = [];

    let currentNumberOfElements = 0;

    const maxNumberOfElements = Math.ceil(this.state.maxWidth / ICON_WIDTH);

    iconArray.forEach(
      (child) => {
        currentNumberOfElements += 1;
        iconArrayElement.push(
          [
            child,
            child.props['data-parent-class'] ? child.props['data-parent-class'] : style.defaultHover,
          ],
        );
      });

    let buttonSize = 'perfect';

    if (currentNumberOfElements * ICON_WIDTH < this.state.maxWidth) buttonSize = 'too small';
    if (currentNumberOfElements > maxNumberOfElements) buttonSize = 'too big';
    if (buttonSize === 'too small') {
      iconArrayElement = iconArrayElement.map(
        element => [element[0], cx(style.squish, element[1])],
      );
      while (currentNumberOfElements < maxNumberOfElements) {
        currentNumberOfElements += 1;
        iconArrayElement.splice(iconArrayElement.length - 1, 0, [<a
          className={style.box}
        >&nbsp;</a>, cx(style.transformIcon, style.squishMe)]);
      }
    }
    if (buttonSize === 'too big') {
      iconArrayElement = iconArrayElement.map(
        (element, index, arr) => {
          if (MediaButton.isMiddleIndex(arr, index)) {
            return [element[0], cx(style.hideMe, element[1])];
          }
          return [element[0], cx(style.hide, element[1])];
        },
      );
    }

    iconArrayElement = iconArrayElement.map(
      (element, index) => {
        if (index === 0) {
          return [element[0], cx(style.transformIcon, style.left, element[1])];
        }
        if (iconArrayElement.length - 1 === index) {
          return [element[0], cx(style.transformIcon, style.right, element[1])];
        }
        return [element[0], cx(style.transformIcon, element[1])];
      },
    );

    iconArrayElement = iconArrayElement.map(
      (element, index) => <div key={index} className={element[1]}>{element[0]}</div>,
    );

    return iconArrayElement;
  }

  // style={{ minWidth: this.state.maxWidth, maxWidth: this.state.maxWidth }}
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

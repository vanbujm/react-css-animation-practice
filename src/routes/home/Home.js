/* eslint-disable jsx-a11y/anchor-has-content,max-len */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import styled, { keyframes } from 'styled-components';
import s from './Home.css';
import Earth from '../../components/Earth';
import Sun from '../../components/Sun';
import MediaButton from '../../components/MediaButton';

class Home extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      resetAnimation: false,
      followButton: 'Follow',
      orbitRadius: 300,
    };

    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  followChange(event) {
    this.setState({ followButton: event.target.value });
  }

  orbitChange(event) {
    this.setState({ orbitRadius: event.target.value });
  }

  toggleAnimation() {
    this.setState({ resetAnimation: !this.state.resetAnimation });
  }

  render() {
    const orbitDistance = this.state.orbitRadius;

    const EarthMaker = ({ className }) => <Earth width={104} height={74} className={className} />;

    const orbit = keyframes`
    from {
      transform: rotate(0deg) translate(${orbitDistance}px) rotate(0deg);
    }
  
    to {
      transform: rotate(360deg) translate(${orbitDistance}px) rotate(-360deg);
    }
  `;

    const StyledEarth = styled(EarthMaker)`
      z-index: 1;
      position: relative;
      animation-name: ${orbit};
      animation-timing-function: linear;
      animation-duration: 10s;
      animation-iteration-count: infinite
    `;
    const animation = !this.state.resetAnimation ? (<div className={s.animationContainer}>
      <Sun width={300} height={300} className={s.sun} />
      <StyledEarth />
    </div>) : null;

    return (
      <article className={s.content}>
        <section>
          <h1>Earth Animation</h1>
          <h4>Messing around with SVG graphics and animations</h4>
          <div className={s.row}>
            <button
              onClick={this.toggleAnimation}
            >
              Toggle Animation
            </button>
            <div style={{ padding: '0 1rem' }}>
              <label htmlFor="orbitRadius">Orbit Radius: </label>
              <input
                id="orbitRadius"
                type="range"
                min={0}
                max={450}
                value={this.state.orbitRadius}
                onChange={(event) => {
                  this.orbitChange(event);
                }}
              />
            </div>
            <span>{this.state.orbitRadius}</span>
          </div>
          <div className={s.row}>{ animation }</div>
        </section>
        <section>
          <h1>A (somewhat improved) attempt at <a
            className={s.link}
            href="https://www.reddit.com/r/web_design/comments/6fdobk/how_would_you_code_the_share_and_follow_buttons/"
          >this</a>
          </h1>
          <div className={s.row}>
            <label htmlFor="button-text">Button Text: </label>
            <input
              id="button-text"
              type="text"
              className={s.textBox}
              value={this.state.followButton}
              onChange={(event) => {
                this.followChange(event);
              }}
            />
          </div>
          <div className={s.exampleTwo}>
            <div className={s.buttonContainer}>
              <MediaButton text={this.state.followButton}>
                <a href="" alt="follow button" data-parent-class={s.twitter}><i
                  className="fa fa-twitter"
                  aria-hidden="true"
                /></a>
                <a href="" alt="follow button" data-parent-class={s.facebook}><i
                  className="fa fa-facebook"
                  aria-hidden="true"
                /></a>
                <a href="" alt="follow button" data-parent-class={s.dribble}><i
                  className="fa fa-dribbble"
                  aria-hidden="true"
                /></a>
                <a href="" alt="follow button" data-parent-class={s.slack}><i
                  className="fa fa-slack"
                  aria-hidden="true"
                /></a>
              </MediaButton>
            </div>
            <div className={s.buttonContainer}>
              <MediaButton text={<span>Share<small> 102</small></span>}>
                <i className="fa fa-twitter" aria-hidden="true" data-parent-class={s.twitter} />
                <i className="fa fa-facebook" aria-hidden="true" data-parent-class={s.facebook} />
                <i className="fa fa-dribbble" aria-hidden="true" data-parent-class={s.dribble} />
                <i className="fa fa-slack" aria-hidden="true" data-parent-class={s.slack} />
              </MediaButton>
            </div>
          </div>
        </section>
      </article>
    );
  }
}

export default withStyles(s)(Home);

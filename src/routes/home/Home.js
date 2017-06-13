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
import s from './Home.css';
import orbitStyle from '../../components/Orbit.css';
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
    };

    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  followChange(event) {
    this.setState({ followButton: event.target.value });
  }

  toggleAnimation() {
    this.setState({ resetAnimation: !this.state.resetAnimation });
  }

  render() {
    const animation = !this.state.resetAnimation ? (<div className={s.animationContainer}>
      <Sun width={208} height={148} className={s.sun} />
      <Earth width={104} height={74} className={cx(s.animation, orbitStyle.orbit)} />
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
          </div>
          { animation }
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
              <a href="" alt="follow button" data-parent-class={s.slack}><i className="fa fa-slack" aria-hidden="true" /></a>
            </MediaButton>
            <MediaButton text={<span>Share<small> 102</small></span>}>
              <i className="fa fa-twitter" aria-hidden="true" data-parent-class={s.twitter} />
              <i className="fa fa-facebook" aria-hidden="true" data-parent-class={s.facebook} />
              <i className="fa fa-dribbble" aria-hidden="true" data-parent-class={s.dribble} />
              <i className="fa fa-slack" aria-hidden="true" data-parent-class={s.slack} />
            </MediaButton>
          </div>
        </section>
      </article>
    );
  }
}

export default withStyles(s, orbitStyle)(Home);

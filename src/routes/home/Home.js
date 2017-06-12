/* eslint-disable jsx-a11y/anchor-has-content */
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
import s from './Home.css';
import TWLogo from '../../components/TWLogo';
import MediaButton from '../../components/MediaButton';

class Home extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      resetAnimation: false,
      followButton: 'follow',
    };
  }

  followChange(event) {
    this.setState({ followButton: event.target.value });
  }

  handleClick() {
    this.setState({ resetAnimation: true });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <article className={s.content}>
            <section>
              <h1>Jon and Patrick's Awesome Animation!</h1>
              <button onClick={this.handleClick}>Reset Animation</button>
              <div className={s.animationContainer}>
                <TWLogo width={104} height={74} className={s.animation} />
              </div>
            </section>
            <section>
              <h1>An (somewhat improved) attempt at <a
                href="https://www.reddit.com/r/web_design/comments/6fdobk/how_would_you_code_the_share_and_follow_buttons/"
              >this</a>
              </h1>
              <label htmlFor="button-text">Button Text: </label>
              <input
                id="button-text"
                type="text"
                className={s.textBox}
                value={this.state.followButton}
                onChange={(event) => { this.followChange(event); }}
              />
              <div className={s.exampleTwo}>
                <MediaButton text={this.state.followButton}>
                  <a href="" alt="follow button"><i className="fa fa-twitter" aria-hidden="true" /></a>
                  <a href="" alt="follow button"><i className="fa fa-facebook" aria-hidden="true" /></a>
                  <a href="" alt="follow button"><i className="fa fa-dribbble" aria-hidden="true" /></a>
                  <a href="" alt="follow button"><i className="fa fa-dribbble" aria-hidden="true" /></a>
                  <a href="" alt="follow button"><i className="fa fa-dribbble" aria-hidden="true" /></a>
                  <a href="" alt="follow button"><i className="fa fa-dribbble" aria-hidden="true" /></a>
                  <a href="" alt="follow button"><i className="fa fa-dribbble" aria-hidden="true" /></a>
                  <a href="" alt="follow button"><i className="fa fa-slack" aria-hidden="true" /></a>
                </MediaButton>
                <MediaButton text="Share">
                  <i className="fa fa-twitter" aria-hidden="true" />
                  <i className="fa fa-facebook" aria-hidden="true" />
                  <i className="fa fa-dribbble" aria-hidden="true" />
                  <i className="fa fa-slack" aria-hidden="true" />
                </MediaButton>
              </div>
            </section>
          </article>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);

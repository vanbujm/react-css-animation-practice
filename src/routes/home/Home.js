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

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <article className={s.content}>
            <section>
              <h1>Jon and Patrick's Awesome Animation!</h1>
              <div className={s.animationContainer}>
                <TWLogo width={104} height={74} className={s.animation} />
              </div>
            </section>
            <section>
              <h1>An attempt at <a
                href="https://www.reddit.com/r/web_design/comments/6fdobk/how_would_you_code_the_share_and_follow_buttons/"
              >this</a>
              </h1>
              <div className={s.exampleTwo}>
                <MediaButton text="Follow">
                  <i className="fa fa-twitter" aria-hidden="true" />
                  <i className="fa fa-facebook" aria-hidden="true" />
                  <i className="fa fa-dribbble" aria-hidden="true" />
                  <i className="fa fa-slack" aria-hidden="true" />
                </MediaButton>
                {/*<MediaButton text="Share">*/}
                  {/*<i className="fa fa-twitter" aria-hidden="true" />*/}
                  {/*<i className="fa fa-facebook" aria-hidden="true" />*/}
                  {/*<i className="fa fa-dribbble" aria-hidden="true" />*/}
                  {/*<i className="fa fa-slack" aria-hidden="true" />*/}
                {/*</MediaButton>*/}
              </div>
            </section>
          </article>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);

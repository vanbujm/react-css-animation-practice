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

class Home extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <article className={s.content}>
            <h1>Jon and Patrick's Awesome Animation!</h1>
            <div className={s.animationContainer}>
              <TWLogo width={104} height={74} />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);

/* eslint-disable jsx-a11y/anchor-has-content,max-len,react/no-did-mount-set-state */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Earth from '../../components/Earth';
import Moon from '../../components/Moon';
import Sun from '../../components/Sun';
import MediaButton from '../../components/MediaButton';
import CompareItems from '../../components/CompareItems';
import Orbiter from '../../components/Orbiter';

class Home extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      firstRender: true,
      resetAnimation: false,
      followButton: 'Follow',
      orbitRadius: 300,
    };

    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.setState({ firstRender: false });
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
    const earthOrbitRadius = this.state.orbitRadius;
    const moonOrbitRadius = 100;
    const earthDiameter = 100;
    const moonDiameter = 30;

    const orbitMoon = `
    from {
      transform: translate(-${earthDiameter / 2}px) rotate(0deg) translate(${earthOrbitRadius}px) rotate(0deg) rotate(0deg) translate(${moonOrbitRadius}px) rotate(0deg);
    }
  
    to {
      transform: translate(-${earthDiameter / 2}px) rotate(360deg) translate(${earthOrbitRadius}px) rotate(-360deg) rotate(${360 * 5}deg) translate(${moonOrbitRadius}px) rotate(-${360 * 5}deg);
    }
  `;

    const moonOptions = {
      keyframeString: orbitMoon,
    };

    const StyledMoon = Orbiter(this.state.orbitRadius, moonOptions)(Moon);

    const StyledEarth = Orbiter(this.state.orbitRadius)(Earth);

    const animation = !this.state.resetAnimation ? (
      <div className={s.animationContainer}>
        <Sun width={300} height={300} className={s.sun} />
        {!this.state.firstRender && <StyledEarth width={earthDiameter} height={earthDiameter} /> }
        {!this.state.firstRender && <StyledMoon width={moonDiameter} height={moonDiameter} /> }
      </div>
    ) : null;


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
              <label htmlFor="orbitRadius">Earth Orbit Radius: </label>
              <input
                id="orbitRadius"
                type="range"
                min={150}
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
                <a href="" alt="follow button" data-parent-class={s.twitter}>
                  <i
                    className="fa fa-twitter"
                    aria-hidden="true"
                  />
                </a>
                <a href="" alt="follow button" data-parent-class={s.facebook}>
                  <i
                    className="fa fa-facebook"
                    aria-hidden="true"
                  />
                </a>
                <a href="" alt="follow button" data-parent-class={s.dribble}>
                  <i
                    className="fa fa-dribbble"
                    aria-hidden="true"
                  />
                </a>
                <a href="" alt="follow button" data-parent-class={s.slack}>
                  <i
                    className="fa fa-slack"
                    aria-hidden="true"
                  />
                </a>
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
            <CompareItems hrefs={['', '']}>
              <span>Try</span>
              <span>Buy</span>
              <span>$19</span>
            </CompareItems>
          </div>
        </section>
      </article>
    );
  }
}

export default withStyles(s)(Home);

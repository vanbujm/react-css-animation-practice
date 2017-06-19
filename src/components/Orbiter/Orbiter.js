import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import cx from 'classnames';


function Orbiter(orbitRadius, options) {
  const defaultOptions = {
    keyframeString: `
        from {
          transform: rotate(0deg) translate(${orbitRadius}px) rotate(0deg);
        }
      
        to {
          transform: rotate(360deg) translate(${orbitRadius}px) rotate(-360deg);
        }
      `,
    css: {
      animationDuration: '10s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      position: 'relative',
      zIndex: 1,
    },
  };

  const finalOptions = Object.assign({}, defaultOptions, options);

  const componentStyle = `
      z-index: ${finalOptions.css.zIndex};
      position: ${finalOptions.css.position};
      animation-name: ${keyframes`${finalOptions.keyframeString}`};
      animation-timing-function: ${finalOptions.css.animationTimingFunction};
      animation-duration: ${finalOptions.css.animationDuration};
      animation-iteration-count: ${finalOptions.css.animationIterationCount}
    `;

  return ComponentToOrbit => class extends Component {
    render() {
      const componentMaker = ({ className }) => {
        const passThroughProps = this.props;
        delete passThroughProps.className;
        const newClassName = cx(className, this.props.className);

        return <ComponentToOrbit {...passThroughProps} className={newClassName} />;
      };

      const StyledComponent = styled(componentMaker)`${componentStyle}`;
      return <StyledComponent />;
    }
  };
}

export default Orbiter;

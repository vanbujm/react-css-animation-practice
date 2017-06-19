import React from 'react';
import styled, { keyframes } from 'styled-components';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

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
      animation-iteration-count: ${finalOptions.css.animationIterationCount};
    `;

  return (ComponentToOrbit) => {
    const WithOrbit = ({ className, ...props }) =>
      <ComponentToOrbit {...props} className={className} />;

    WithOrbit.displayName = `Orbiter(${getDisplayName(ComponentToOrbit)})`;
    return styled(WithOrbit)`${componentStyle}`;
  };
}

export default Orbiter;

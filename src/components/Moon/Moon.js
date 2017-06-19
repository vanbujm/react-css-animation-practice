/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

class Moon extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    className: PropTypes.string,
  };
  render() {
    return (
      <svg viewBox="0.199985 0.899994 497 496.3" className={this.props.className} width={this.props.width} height={this.props.height}>
        <ellipse
          style={{ fill: 'rgb(216, 216, 216)', stroke: 'rgb(0, 0, 0)', strokeWidth: 0 }}
          cx="249.8"
          cy="247.9"
          rx="247"
          ry="247"
          transform="matrix(1, 0, 0, 1, 0, 0)"
        />
        <path
          d="M 19.5 76.2 L 19.5 76.2 Z"
          style={{ stroke: 'black', fill: 'none' }}
          transform="matrix(1, 0, 0, 1, 0, 0)"
        />
        <path
          d="M 98.7 368.6 C 75.9 354.3 41.4 356.5 25.2 335.7 C 4.1 308.7 0.2 246.5 8.3 208 C 14.8 177.1 23.4 142.9 47.7 110.3 C 61.4 92.1 75 73.4 93.7 58.3 C 108.6 46.3 128 37.1 144.3 28.6 C 156 22.4 151.6 33.1 145.1 46.8 C 146.1 49.1 146.4 51.4 145.2 53.7 C 137.1 62 137.1 74.5 142 79.2 C 144.3 81.5 147.5 83 150.1 84.3 C 160.2 89.2 185.1 79.1 212 93.4 C 215.9 109 207.5 116.8 202.2 122.2 C 198.3 126.1 181.1 136.7 187.6 154.1 C 206.6 165.5 220.5 154.9 230.2 150.1 C 253.7 138.3 294.6 118.6 317.9 141.9 C 320.1 144.2 327.9 150.7 320.6 157.5 C 316.1 161.8 310.9 156.9 301.7 158.2 C 289.8 160 280.6 165.5 276.8 165.5 C 272.7 165.5 260.5 167.6 258.6 171.7 C 252.9 183 256.1 194.3 253.2 206.1 C 250.8 215.4 246.7 222.8 241 229.7 C 233.3 238.8 219.5 232.8 212.7 251.3 C 210.7 259.2 216.9 257.2 218.7 262.7 C 220 266.6 217.7 272.5 216.7 275.6 C 213.2 286.2 210.2 295.1 203.9 304.6 C 194.3 319.1 180.9 329 187.6 349.2 C 193.6 367.1 218.8 370.4 224.7 388.3 C 225.5 390.7 230.1 400.2 226.8 404.6 C 212.8 423.8 179.6 423.5 156.6 417.4 C 132.2 410.9 120 382.1 98.7 368.6 Z M 135.8 178.4 C 128.5 178.4 127.2 186.5 127.2 194.7 C 127.2 202.8 137.6 210.5 144.9 210.5 C 152.2 210.5 153.6 202.8 153.6 194.7 C 153.6 186.5 143 178.4 135.8 178.4 Z"
          style={{ fill: 'rgb(132, 132, 132)' }}
          transform="matrix(1, 0, 0, 1, 0, 0)"
        />
        <ellipse
          style={{ fill: 'rgb(216, 216, 216)', stroke: 'rgb(0, 0, 0)', strokeWidth: 4, fillOpacity: 0 }}
          cx="250.2"
          cy="250.2"
          rx="247"
          ry="247"
          transform="matrix(1, 0, 0, 1, 0, 0)"
        />
        <path
          d="M 390.3 84.8 C 379.7 75 353 58.4 322.7 95.3 C 317.4 105.4 321.4 111.1 325.2 117.3 C 329.1 123.8 332 132.6 339 136.9 C 342.3 138.8 350.1 142.2 351.4 147.6 C 355.8 165.2 328.4 178.6 336.4 194.5 C 342.4 206.6 362 209.8 367.2 220.2 C 373.7 233.4 364.9 251.5 371.6 264.7 C 374.7 270.9 390.2 274 392.3 282.9 C 394.2 291.2 390.2 299.5 382.8 306.7 C 376.1 313.5 364.4 315.8 356 318.6 C 352.2 319.9 348.6 321 344.9 320.5 C 330.2 318.4 323.6 293.2 305.2 300.5 C 299.9 302.5 295.4 305.6 290.7 308.7 C 273.4 320.1 270.5 343.3 273.1 361.9 C 274.4 370.9 282.8 397.9 285 403.3 C 293.4 424.1 314.6 445.3 337.7 449 C 350.1 451.1 362.5 446.3 373.4 442.2 C 383.6 438.3 392.4 431.3 398.5 422.2 C 403.5 414.7 406.9 407.3 409.9 398.9 C 414.4 385 415.4 362.6 396.7 362.6 C 395.2 362.6 385.4 365.2 382.8 367 C 376.3 371.4 377.5 382.1 375.3 388.3 C 374.4 391.1 369.8 395 366.5 393.8 C 363.6 392.8 360.8 370 359.7 366.3 C 358.4 362.2 355.1 357.2 357.1 353.1 C 362 343.3 379.7 349 386.6 338.8 C 397 323.3 399.3 303 403.3 284.4 C 404.6 278.4 414.1 278 418 274.1 C 429.1 263.1 444.1 249.7 440.5 232.1 C 438.7 222.5 434.1 220.1 428.6 214.5 C 425 211 422.1 202.8 420.4 198.3 C 419.5 195 420.4 189.8 420.4 186.4 C 420.4 172.2 423 154.3 413 144.4 C 407.1 138.5 397.3 136.7 393.6 129.4 C 389.3 121.1 395.4 109.3 395.4 101 C 395.4 98.9 396 90.1 390.3 84.8 Z"
          style={{ stroke: 'black', strokeWidth: 0, fill: 'rgb(132, 132, 132)' }}
          transform="matrix(1, 0, 0, 1, 0, 0)"
        />
        <path
          d="M 420.3 116.4 C 418.5 118 424 140.1 426.1 148.8 C 426.6 150.4 426.1 154.5 427.4 155.6 C 429.1 157.4 432.2 156.9 434.9 156.9 C 445 156.9 445.4 149.2 448.1 141.3 C 448.6 139.8 449.6 134.9 448.8 133.1 C 446.2 128.1 448.4 126.4 447.1 121.2 C 446 117.8 444.9 114.9 440 112.9 C 432.3 109.5 422.6 110.5 420.3 116.4 Z"
          style={{ stroke: 'black', strokeWidth: 0, fill: 'rgb(132, 132, 132)' }}
          transform="matrix(1, 0, 0, 1, 0, 0)"
        />
        <path
          d="M 455 162.6 C 459.4 167.6 458.5 174 460.7 180 C 463.9 190 469.8 199.4 471.9 209.5 C 472.7 213.7 476.6 222 474.3 226.4 C 473.5 228.1 471.2 231.8 467 233.1 C 461 235.1 457.6 237.2 450.6 232.1 C 440.1 224.6 433 194.2 436.9 186.5 C 439.3 181.5 437.9 171.6 436.7 167.2 C 435.7 163.7 437.7 159.8 445.5 159.3 C 450.9 159 455 162.6 455 162.6 Z"
          style={{ stroke: 'black', strokeWidth: 0, fill: 'rgb(132, 132, 132)' }}
          transform="matrix(1, 0, 0, 1, 0, 0)"
        />
        <path
          d="M 463.1 294.2 C 452.7 298.2 445 306.5 439.3 317.9 C 436.7 323 433.5 329.7 434.9 335.5 C 437.4 345.5 450.1 355.9 460.7 353.8 C 477.3 350.3 475.8 328.9 478.1 316.8 C 479.4 310.6 481.5 299.9 476.3 294.8 C 473.2 291.7 467.2 292.5 463.1 294.2 Z"
          style={{ stroke: 'black', strokeWidth: 0, fill: 'rgb(132, 132, 132)' }}
          transform="matrix(1, 0, 0, 1, 0, 0)"
        />
      </svg>
    );
  }
}

Moon.defaultProps = {
  className: '',
};

export default Moon;
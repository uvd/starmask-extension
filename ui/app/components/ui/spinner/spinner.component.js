import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ className = '', color = '#000000' }) => {
  return (
    <div className={`spinner ${className}`}>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        style={{ background: 'none' }}
        className="lds-spinner"
      >
        <path fill="none" className="bk" d="M0 0h100v100H0z" />
        <rect
          x="46"
          y="39"
          width="8"
          height="22"
          rx="5"
          ry="5"
          fill="#1C4BDE"
          transform="translate(0 -20)"
        >
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="46"
          y="39"
          width="8"
          height="22"
          rx="5"
          ry="5"
          fill="#1C4BDE"
          transform="rotate(40 77.475 60)"
        >
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1s"
            begin="0.1111111111111111s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="46"
          y="39"
          width="8"
          height="22"
          rx="5"
          ry="5"
          fill="#1C4BDE"
          transform="rotate(80 61.918 60)"
        >
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1s"
            begin="0.2222222222222222s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="46"
          y="39"
          width="8"
          height="22"
          rx="5"
          ry="5"
          fill="#1C4BDE"
          transform="rotate(120 55.774 60)"
        >
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1s"
            begin="0.3333333333333333s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="46"
          y="39"
          width="8"
          height="22"
          rx="5"
          ry="5"
          fill="#1C4BDE"
          transform="rotate(160 51.763 60)"
        >
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1s"
            begin="0.4444444444444444s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="46"
          y="39"
          width="8"
          height="22"
          rx="5"
          ry="5"
          fill="#1C4BDE"
          transform="rotate(-160 48.237 60)"
        >
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1s"
            begin="0.5555555555555556s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="46"
          y="39"
          width="8"
          height="22"
          rx="5"
          ry="5"
          fill="#1C4BDE"
          transform="rotate(-120 44.226 60)"
        >
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1s"
            begin="0.6666666666666666s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="46"
          y="39"
          width="8"
          height="22"
          rx="5"
          ry="5"
          fill="#1C4BDE"
          transform="rotate(-80 38.082 60)"
        >
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1s"
            begin="0.7777777777777778s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="46"
          y="39"
          width="8"
          height="22"
          rx="5"
          ry="5"
          fill="#1C4BDE"
          transform="rotate(-40 22.525 60)"
        >
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1s"
            begin="0.8888888888888888s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>

    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

export default Spinner;

// src/components/SemiCircleArcSlider.js
import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';

const Handle = Slider.Handle;

const SemiCircleArcSlider = ({ value, onChange }) => {
  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

  return (
    <div className="relative">
      <Slider
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={onChange}
        handle={handle}
        className="absolute w-full h-full rotate-[-90deg];"
      />
    </div>
  );
};

export default SemiCircleArcSlider;

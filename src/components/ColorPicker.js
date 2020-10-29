import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TwitterPicker } from 'react-color';

import * as actions from '../store/actions/index';
import * as CONST from '../constants';

function ColorPicker({ dispatch }) {
  const [selectedColor, setSelectedColor] = useState(
    CONST.THEME_COLORS.primary.main
  );
  function handleChange(color) {
    setSelectedColor(color);
    dispatch(actions.updateUserColor(color.hex));
  }
  return (
    <div>
      <div
        className="choosen-color"
        style={{ backgroundColor: selectedColor?.hex ?? selectedColor }}
      ></div>
      <TwitterPicker
        width="420px"
        color={selectedColor}
        colors={CONST.COLOR_OPTIONS}
        onChange={handleChange}
      ></TwitterPicker>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => dispatch;

export default connect(mapDispatchToProps)(ColorPicker);

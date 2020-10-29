import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TwitterPicker } from 'react-color';

import * as actions from '../store/actions/index';
import * as CONST from '../constants';

function ColorPicker({ dispatch, userColor }) {
  const [selectedColor, setSelectedColor] = useState(
    userColor ? userColor : CONST.THEME_COLORS.primary.main
  );
  function handleChange(color) {
    setSelectedColor(color);
    dispatch(actions.updateUserColor(color.hex));
  }
  return (
    <div style={{ width: '100%' }}>
      <div
        className="choosen-color"
        style={{ backgroundColor: selectedColor?.hex ?? selectedColor }}
      ></div>
      <TwitterPicker
        width="inherit"
        color={selectedColor}
        colors={CONST.COLOR_OPTIONS}
        onChange={handleChange}
      ></TwitterPicker>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = (state) => {
  return {
    userColor: state.auth.userColor,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);

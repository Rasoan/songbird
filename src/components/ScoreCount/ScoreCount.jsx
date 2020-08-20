import React from "react";
import style from "./ScoreCount.module.scss";
import PropTypes from 'prop-types';
import store from '../../redux/reduxer-store';

const ScoreCount = (props) => {
  window.store = store;


  return (
      <div className={style.scoreCountContainer}>
        <span>Score:</span><span>&nbsp;{store.getState()}</span>
      </div>
  );
};

ScoreCount.propTypes = {
  scoreCount: PropTypes.number.isRequired,
};

export default ScoreCount;
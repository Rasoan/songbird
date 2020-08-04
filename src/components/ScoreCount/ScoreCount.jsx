import React from "react";
import style from "./ScoreCount.module.scss";
import PropTypes from 'prop-types';

const ScoreCount = (props) => {
  return (
      <div className={style.scoreCountContainer}>
        <span>Score:</span><span>&nbsp;{props.scoreCount}</span>
      </div>
  );
};

ScoreCount.propTypes = {
  scoreCount: PropTypes.number.isRequired,
};

export default ScoreCount;
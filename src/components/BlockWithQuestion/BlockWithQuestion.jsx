import React from "react";
import style from "./BlockWithQuestion.module.scss";
import PropTypes from "prop-types";
import ReactAudioPlayer from "react-audio-player";

const BlockWithQuestion = (props) => {
  return (
    <div className={style.BlockWithQuestion}>
      <img width="200" height="200" src={props.pathToPicture} />
      <div className={style.ContainerForNameAndPlayer}>
        <p className={style.BirdName}>{props.BirdName}</p>
        <ReactAudioPlayer
          src={props.audioTrackExample}
          controls
        />
      </div>
    </div>
  );
};

//pathToPicture={pathToPicture} pathToTrack={pathToTrack} BirdName={BirdName}

// Header.defaultProps = {
//   callBack: () => {},
//   title: WORDS_END.tittle,
//   isRedirectMain: false,
// };

BlockWithQuestion.propTypes = {
  pathToPicture: PropTypes.string.isRequired,
  audioTrackExample: PropTypes.string.isRequired,
  BirdName: PropTypes.string.isRequired,
};

export default BlockWithQuestion;

import React from "react";
import ReactAudioPlayer from "react-audio-player";
import style from "./BlockWithAnswerDescriptions.module.scss";
import PropTypes from 'prop-types';

const BlockWithAnswerDescriptions = (props) => {
  return (
    <div className={style.blockWithAnswerDescriptionsContainer}>
      <div className={style["blockWithAnswerDescriptions-hint"]  + ' ' + style['blockWithAnswerDescriptions-displayNone']}>
        <p>Послушайте плеер.</p>
        <p>Выберите птицу из списка</p>
      </div>
      <div className={style.blockWithAnswerDescriptions}>
        <img
          width="200"
          height="200"
          src={props.pathToPicture}
          alt="image"
        />
        <p>{props.BirdNameRu}</p>
        <p>{props.BirdNameEn}</p>
        <ReactAudioPlayer
          src={props.audioTrackExample}
          controls
        />
        <p>{props.descriptionSelectedObject}</p>
      </div>
    </div>
  );
};


BlockWithAnswerDescriptions.propTypes = {
  pathToPicture: PropTypes.string.isRequired,
  audioTrackExample: PropTypes.string.isRequired,
  BirdNameRu: PropTypes.string.isRequired,
  BirdNameEn: PropTypes.string.isRequired,
  descriptionSelectedObject: PropTypes.string.isRequired,
};

// Header.defaultProps = {
//   callBack: () => {},
//   title: WORDS_END.tittle,
//   isRedirectMain: false,
// };

// Header.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   isRedirectMain: PropTypes.bool,
//   type: PropTypes.string.isRequired,
//   title: PropTypes.string,
//   message: PropTypes.string.isRequired,
//   callBack: PropTypes.func,
// };

export default BlockWithAnswerDescriptions;

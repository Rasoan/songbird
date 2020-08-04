import React from "react";
import style from "./Header.module.scss";
import ScoreCount from "../ScoreCount";
import SwitchCategory from "../SwitchCategory";
//import PropTypes from 'prop-types';

const Header = () => {
  let array = ['певучие птицы', 'прыгучие птицы'];
  return (
    <>
      <div className={style.header__main}>
        <p className={style.header__tittle}>Songbird</p>
        <ScoreCount scoreCount={0} />
      </div>
      <SwitchCategory items={array}/>
    </>
  );
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

export default Header;

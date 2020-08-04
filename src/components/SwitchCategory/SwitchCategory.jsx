import React from "react";
import style from "./SwitchCategory.module.scss";
//import PropTypes from 'prop-types';

const SwitchCategory = () => {
  return (
      <ul className={style.switchCategory}>
        <li className={style["switchCategory-item"]}>
          <button className={style["switchCategory-button"]}>Разминка</button>
        </li>
        <li className={style["switchCategory-item"]}>
          <button className={style["switchCategory-button"]}>Воробьиные</button>
        </li>
        <li className={style["switchCategory-item"]}>
          <button className={style["switchCategory-button"]}>Лесные птицы</button>
        </li>
        <li className={style["switchCategory-item"]}>
          <button className={style["switchCategory-button"]}>Певчие птицы</button>
        </li>
        <li className={style["switchCategory-item"]}>
          <button className={style["switchCategory-button"]}>Хищные птицы</button>
        </li>
        <li className={style["switchCategory-item"]}>
          <button className={style["switchCategory-button"]}>Морские птицы</button>
        </li>
      </ul>
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

export default SwitchCategory;

import React from "react";
import style from "./BlockWithAnswers.module.scss";

const BlockWithAnswers = () => {
  return (
    <div className={style.blockWithAnswers}>
      <ul className={style.blockWithAnswers__list}>
        <li><button className={style.blockWithAnswers__button}>Ворон</button></li>
        <li><button className={style.blockWithAnswers__button}>Журавль</button></li>
        <li><button className={style.blockWithAnswers__button}>Ласточка</button></li>
        <li><button className={style.blockWithAnswers__button}>Козодой</button></li>
        <li><button className={style.blockWithAnswers__button}>Кукушка</button></li>
        <li><button className={style.blockWithAnswers__button}>Синица</button></li>
      </ul>
    </div>
  );
};

export default BlockWithAnswers;

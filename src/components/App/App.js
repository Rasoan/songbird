import React from 'react';
import style from './App.module.scss';
import Header from '../Header'
import BlockWithQuestion from '../BlockWithQuestion';
import BlockWithAnswers from '../BlockWithAnswers';
import BlockWithAnswerDescriptions from '../BlockWithAnswerDescriptions';



const App = () => {
// вопрос
  let pathToPictureQuestion = 'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg';
  let BirdNameQuestion = 'Ворона';
  let audioTrackExampleQuestion = 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3';
 // ответ
  let pathToPictureAnswerDescriptions = 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg';
  let BirdNameRuAnswerDescriptions = 'Ворона';
  let BirdNameENRuAnswerDescriptions = 'Delichon urbicum';
  let descriptionSelectedObject ='Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.';
  let audioTrackExampleDescriptions = 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3';

  return (
    <div className={style.App__wrapper}>
      <Header />
      <BlockWithQuestion 
        BirdName={BirdNameQuestion} 
        pathToPicture={pathToPictureQuestion}  
        audioTrackExample={audioTrackExampleQuestion} />
      <div className={style.app__containerAnswers}>
      <BlockWithAnswers />
      <BlockWithAnswerDescriptions 
        BirdNameRu={BirdNameRuAnswerDescriptions} 
        BirdNameEn={BirdNameENRuAnswerDescriptions} 
        pathToPicture={pathToPictureAnswerDescriptions} 
        audioTrackExample={audioTrackExampleDescriptions} 
        descriptionSelectedObject={descriptionSelectedObject}/>
      </div>
      <button onClick={ () => { window.store.dispatch( {type: 'ASYNC_INCREMENT'} ) } } className={style.app__buttonNext}>Next level</button>
    </div>
  );
}

export default App;

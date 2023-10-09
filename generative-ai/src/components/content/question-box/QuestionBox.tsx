import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './questionBox.css';
import { useQuestionBox } from './QuestionBoxFunctions'; // Importe as funções


export const QuestionBox = () => {

  const {
    isParagraphVisible,
    inputValue,
    handleInputChange,
    handleMessageSubmit,
  } = useQuestionBox();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Chama handleMessageSubmit quando a tecla "Enter" é pressionada
      handleMessageSubmit();
    }
  };


  return (
    <div className="box-size">
      {isParagraphVisible && <p>Envie uma mensagem</p>}
      <div className="textarea">
        <input type="text" onChange={handleInputChange} value={inputValue} onKeyDown={handleKeyPress}/>
        <FontAwesomeIcon icon={faPaperPlane} style={{ color: '#ffffff' }} className='input-icon' onClick={handleMessageSubmit}/>
      </div>
    </div>
  );
};

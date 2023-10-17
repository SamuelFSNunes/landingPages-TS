import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './questionBox.css';
import { useQuestionBox } from './QuestionBoxFunctions';

export const QuestionBox = () => {
  const {
    isParagraphVisible,
    inputValue,
    messages,
    handleInputChange,
    handleMessageSubmit,
  } = useQuestionBox();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleMessageSubmit();
    }
  };

  return (
    <div className='message_box'>
    <div className='messages'>
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="box-size">
        {isParagraphVisible && <p>Envie uma mensagem</p>}
        <div className="textarea">
          <input
            type="text"
            onChange={handleInputChange}
            value={inputValue}
            onKeyDown={handleKeyPress}
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            style={{ color: '#ffffff' }}
            className="input-icon"
            onClick={handleMessageSubmit}
          />
        </div>
      </div>
    </div>
  );
};

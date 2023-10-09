// questionBoxFunctions.ts

import { useState } from 'react';

export function useQuestionBox() {
  const [isParagraphVisible, setIsParagraphVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsParagraphVisible(value.trim() === '');
  };

  const handleMessageSubmit = () => {
    if (inputValue.trim() !== '') {
      // Faça algo com o valor do input, por exemplo, envie-o para um servidor
      console.log('Mensagem enviada:', inputValue);

      // Limpe o input
      setInputValue('');

      // Reexiba o parágrafo
      setIsParagraphVisible(true);
    }
  };

  return {
    isParagraphVisible,
    inputValue,
    handleInputChange,
    handleMessageSubmit,
  };
}

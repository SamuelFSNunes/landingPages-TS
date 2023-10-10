// questionBoxFunctions.ts

import { useState } from 'react';

export function useQuestionBox() {
  const [isParagraphVisible, setIsParagraphVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [displayedElement, setDisplayedElement] = useState<JSX.Element | null>(null)
  const [displayedElementAI, setDisplayedElementAI] = useState<JSX.Element | null>(null);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsParagraphVisible(value.trim() === '');
  };

  const handleMessageSubmit = () => {
    if (inputValue.trim() !== '') {
      
      // Criar elemento HTML do INPUT
      const newElement = (
        <div>
          <p className='newHTML'>{inputValue}</p>
        </div>
      );
      setDisplayedElement(newElement);

      // Criar elemento HTML do OUTPUT
      const output = (
        <div>
          <p className='output'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellendus unde laboriosam ut molestias itaque dolorum mollitia, voluptas eius ad magni ipsam, repellat maxime! Veritatis perspiciatis fugit asperiores voluptates dolore.</p>
        </div>
      )
      setDisplayedElementAI(output)
      // Limpe o input
      setInputValue('');

      // Reexiba o parágrafo
      setIsParagraphVisible(true);
    }
  };



  return {
    isParagraphVisible,
    inputValue,
    displayedElement,
    displayedElementAI,
    handleInputChange,
    handleMessageSubmit,
  };
}

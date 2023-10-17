import { useState, ReactNode } from 'react';

export function useQuestionBox() {
  const [isParagraphVisible, setIsParagraphVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ReactNode[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsParagraphVisible(value.trim() === '');
  };

  const handleMessageSubmit = () => {
    if (inputValue.trim() !== '') {
      // Crie o elemento HTML da mensagem de entrada com uma classe específica
      const inputMessage = (
        <div key={messages.length} className="message-input-message">
          <p>{inputValue}</p>
        </div>
      );

      // Crie o elemento HTML da mensagem de saída com uma classe específica
      const outputValue = 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum';
      const outputMessage = (
        <div key={messages.length + 1} className="message-output-message">
          <p>{outputValue}</p>
        </div>
      );

      // Adicione as mensagens de entrada e saída ao array de mensagens
      setMessages((prevMessages) => [...prevMessages, inputMessage, outputMessage]);

      setInputValue('');
      setIsParagraphVisible(true);
    }
  };

  return {
    isParagraphVisible,
    inputValue,
    messages,
    handleInputChange,
    handleMessageSubmit,
  };
}

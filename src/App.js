import React, { useState } from 'react';

const Modal = ({ text, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose} 
    >
      <div>
        <h2 className="text-lg text-white">Full Metin:</h2>
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
};


const App = () => {
  const [inputText, setInputText] = useState('');
  const [texts, setTexts] = useState([]);
  const [selectedText, setSelectedText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddText = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      setTexts([...texts, inputText]);
      setInputText('');
    }
  };

  const handleTextClick = (text) => {
    setSelectedText(text);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleAddText} className="mb-4">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="border border-gray-300 p-2"
          placeholder="Metin girin..."
        />
        <button type="submit" className="ml-2 bg-black text-white py-1 px-3 rounded">
          Ekle
        </button>
      </form>

      <ul className="list-disc pl-5">
        {texts.map((text, index) => (
          <li
            key={index}
            onClick={() => handleTextClick(text)}
            className="cursor-pointer hover:text-blue-500"
          >
            {text.length < 6 ? text : `${text.slice(0, 5)}...`}
          </li>
        ))}
      </ul>

      {isModalOpen && <Modal text={selectedText} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;

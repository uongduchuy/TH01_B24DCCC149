import React, { useState } from 'react';
function Question({ question, options, correctAnswer, handleAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    handleAnswer(option === correctAnswer);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>{question}</h3>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionClick(option)}
          style={{
            backgroundColor: selectedOption === option ? (option === correctAnswer ? 'green' : 'red') : '',
            margin: '5px',
          }}
        >
          {option}
        </button>
      ))}
      {selectedOption && (
        <p>
          {selectedOption === correctAnswer ? 'Đúng!' : 'Sai!'}
        </p>
      )}
    </div>
  );
}
function Result({ correctAnswersCount }) {
  return (
    <div>
      <h2>Kết quả</h2>
      <p>Tổng số câu đúng: {correctAnswersCount} / 3</p>
    </div>
  );
}
function App() {
  const questions = [
    {
      question: "ReactJS dùng để làm gì?",
      options: ["Mobile App", "Web UI", "Hệ điều hành", "Cơ sở dữ liệu"],
      correctAnswer: "Web UI",
    },
    {
      question: "JavaScript là gì?",
      options: ["Ngôn ngữ lập trình", "Công cụ chỉnh sửa ảnh", "Thư viện JavaScript", "Hệ điều hành"],
      correctAnswer: "Ngôn ngữ lập trình",
    },
    {
      question: "HTML là gì?",
      options: ["Ngôn ngữ lập trình", "Công cụ chỉnh sửa ảnh", "Ngôn ngữ đánh dấu", "Cơ sở dữ liệu"],
      correctAnswer: "Ngôn ngữ đánh dấu",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  return (
    <div style={{ padding: '20px' }}>
      <h1>Bài 5: Quiz App</h1>
      {currentQuestionIndex < questions.length ? (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          correctAnswer={questions[currentQuestionIndex].correctAnswer}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Result correctAnswersCount={correctAnswersCount} />
      )}
    </div>
  );
}
export default App;

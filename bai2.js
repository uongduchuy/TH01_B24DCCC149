import React, { useState } from 'react';
import './App.css';
function ColorBox({ color }) {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: color,
        marginTop: '20px',
      }}
    ></div>
  );
}
function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  return (
    <div>
      <h1>Chọn Màu</h1>
      <button onClick={() => handleColorChange('red')}>Đỏ</button>
      <button onClick={() => handleColorChange('blue')}>Xanh</button>
      <button onClick={() => handleColorChange('yellow')}>Vàng</button>
      {selectedColor && <ColorBox color={selectedColor} />}
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <ColorPicker />
    </div>
  );
}
export default App;
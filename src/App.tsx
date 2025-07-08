import React, { useEffect } from 'react';
import './App.css';
import MarkdownPreview from './MarkdownPreview';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="App">
      <MarkdownPreview />
    </div>
  );
}

export default App;

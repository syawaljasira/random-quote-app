import React, { useEffect, useState } from 'react';
import './app.css';
import { colors, quotes } from './quote';
import Main from './components/Main';

function App() {
  const [quote, setQuote] = useState({});
  const [color, setColor] = useState([]);
  const [fadeText, setFadeText] = useState('');

  const handleQuote = () => {
    let colorRandom = Math.round(Math.random() * 9);
    let quoteRandom = Math.round(Math.random() * 7);

    setQuote(quotes[quoteRandom]);
    if (quote === quotes[quoteRandom]) {
      if (quoteRandom === 0) {
        setQuote(quotes[quoteRandom + 1]);
      } else if (quoteRandom === 7) {
        setQuote(quotes[quoteRandom - 1]);
      } else {
        setQuote(quotes[quoteRandom - 1]);
      }
    }

    setColor(colors[colorRandom]);
    if (color === colors[colorRandom]) {
      if (quoteRandom === 0) {
        setColor(colors[colorRandom + 1]);
      } else if (quoteRandom === 7) {
        setColor(colors[colorRandom - 1]);
      } else {
        setColor(colors[colorRandom - 1]);
      }
    }

    setFadeText('fades-text');

    setTimeout(() => {
      setFadeText('');
    }, 1300);
  };

  useEffect(() => {
    handleQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Main
        fadeText={fadeText}
        quote={quote}
        color={color}
        handleQuote={handleQuote}
      />
    </div>
  );
}

export default App;

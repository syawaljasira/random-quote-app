import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import {
  faFreeCodeCamp,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import './app.css';
import { colors, quotes } from './quote';

function App() {
  const [quote, setQuote] = useState({
    message: 'Kerja, kerja, kerja',
    name: 'Jokowi Dodo',
  });
  const [color, setColor] = useState('dark');
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

  return (
    <div className="App">
      <div className={`bg-${color} fades-color`}>
        <div className="container">
          <div className="row vh-100 justify-content-center align-items-center">
            <div className="col-6">
              <div className={`card p-4 text-${color}`}>
                <div className="card-body text-center border">
                  <blockquote className="blockquote">
                    <div className="blockquote-body">
                      <h3 className={fadeText}>
                        <FontAwesomeIcon
                          icon={faQuoteLeft}
                          fixedWidth
                          className="me-3"
                        />
                        {quote.message}
                      </h3>
                    </div>
                    <br />
                    <div className={`blockquote-footer text-end ${fadeText}`}>
                      {quote.name}
                    </div>
                  </blockquote>
                </div>
                <div className="card-footer">
                  <div className="row justify-content-between ">
                    <div className="col-4 ">
                      <span className={`bg-${color} py-2 rounded me-2`}>
                        <button className={`btn btn-${color} btn-sm`}>
                          <FontAwesomeIcon
                            icon={faLinkedinIn}
                            className="fs-5"
                          />
                        </button>
                      </span>
                      <span className={`bg-${color} py-2 rounded`}>
                        <button className={`btn btn-${color} btn-sm`}>
                          <FontAwesomeIcon
                            icon={faFreeCodeCamp}
                            className="fs-5"
                          />
                        </button>
                      </span>
                    </div>
                    <div className="col-3 ">
                      <span className={`bg-${color} py-2 pb-2 rounded`}>
                        <button
                          type="button"
                          className={`btn btn-${color} btn-sm`}
                          onClick={handleQuote}
                        >
                          New quote
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-light py-3">
                by <span className="fw-light">syawaljasira</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import {
  faFreeCodeCamp,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function QuoteBox({ color, fadeText, quote, handleQuote }) {
  return (
    <div id="quote-box" className={`card p-4 text-${color}`}>
      <div className="card-body text-center border">
        <blockquote className="blockquote">
          <div id="text" className="blockquote-body">
            <h3 className={fadeText}>
              <FontAwesomeIcon icon={faQuoteLeft} fixedWidth className="me-3" />
              {quote.message}
            </h3>
          </div>
          <br />
          <div id="author" className={`blockquote-footer text-end ${fadeText}`}>
            {quote.author}
          </div>
        </blockquote>
      </div>
      <div className="card-footer">
        <div className="row justify-content-between ">
          <div className="col-8 ">
            <span className={`bg-${color} py-2 rounded me-2`}>
              <a
                id="linkedin-quote"
                href="https://www.linkedin.com/in/syawal-jasira-b3154a170"
                target="_blank"
                rel="noreferrer"
              >
                <button className={`btn btn-${color} btn-sm`}>
                  <FontAwesomeIcon icon={faLinkedinIn} className="fs-5" />
                </button>
              </a>
            </span>
            <span className={`bg-${color} py-2 rounded me-2`}>
              <a
                id="tweet-quote"
                href="https://www.twitter.com/intent/tweet"
                target="_blank"
                rel="noreferrer"
              >
                <button className={`btn btn-${color} btn-sm`}>
                  <FontAwesomeIcon icon={faTwitter} className="fs-6" />
                </button>
              </a>
            </span>
            <span className={`bg-${color} py-2 rounded`}>
              <a
                id="fcc-quote"
                href="https://www.freecodecamp.org/syawaljasira"
                target="_blank"
                rel="noreferrer"
              >
                <button className={`btn btn-${color} btn-sm`}>
                  <FontAwesomeIcon icon={faFreeCodeCamp} className="fs-5" />
                </button>
              </a>
            </span>
          </div>
          <div className="col-4 col-md-3 ms-md-auto">
            <span className={`bg-${color} py-2 pb-2 rounded`}>
              <button
                id="new-quote"
                type="button"
                className={`btn btn-${color} btn-sm fw-light`}
                onClick={handleQuote}
              >
                <p className="m-0">New quote</p>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

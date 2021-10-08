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
        <div className="row justify-content-between">
          <div className="col-9 col-sm-12 mx-auto align-items-start d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start">
            <span className={`bg-${color} py-1 rounded me-2`}>
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
            <span className={`bg-${color} py-1 rounded me-2`}>
              <a
                id="tweet-quote"
                href="https://www.twitter.com/intent/tweet"
                target="_blank"
                rel="noreferrer"
              >
                <button className={`btn btn-${color} btn-sm`}>
                  <FontAwesomeIcon icon={faTwitter} className="fs-5" />
                </button>
              </a>
            </span>
            <span className={`bg-${color} py-1 rounded`}>
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
            <span
              className={`bg-${color} rounded mt-4 mx-4 mx-sm-0 mt-sm-0 ms-sm-auto`}
            >
              <button
                id="new-quote"
                type="button"
                className={`btn btn-${color} m-0 py-sm-2 px-sm-3 btn-sm fw-light`}
                onClick={handleQuote}
              >
                New quote
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

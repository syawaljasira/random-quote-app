import React from 'react';
import QuoteBox from './QuoteBox';

export default function Main(props) {
  return (
    <div className={`bg-${props.color} fades-color`}>
      <div className="container">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <QuoteBox
              fadeText={props.fadeText}
              color={props.color}
              quote={props.quote}
              handleQuote={props.handleQuote}
            />
            <p className="text-center text-light py-3">
              by <span className="fw-light">syawaljasira</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

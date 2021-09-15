import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App bg-primary">
      <div className="container">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-6">
            <div className="card text-primary p-4">
              <div className="card-body text-center border">
                <blockquote className="blockquote">
                  <div className="blockquote-body">
                    <h3>
                      <FontAwesomeIcon icon={faQuoteLeft} className="me-3" />
                      Kerja, kerja, kerja
                    </h3>
                  </div>
                  <br />
                  <div className="blockquote-footer text-end">Jokowi Dodo</div>
                </blockquote>
              </div>
              <div className="card-footer">
                <div className="row justify-content-between">
                  <div className="col-4">
                    <button className="btn btn-primary me-2">Btn</button>
                    <button className="btn btn-primary">Btn</button>
                  </div>
                  <div className="col-4 d-flex flex-row">
                    <button className="btn btn-primary">Button</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

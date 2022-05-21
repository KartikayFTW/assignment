import "./App.scss";

import Form from "./components/Form";
import Picture from "./components/Picture";

function App() {
  return (
    <div className="main">
      <div className="main__picture">
        <Picture />
      </div>
      <div className="main__form">
        <Form />
      </div>
    </div>
  );
}

export default App;

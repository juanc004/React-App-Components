import "./App.css";
import Accordion from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      <Accordion />
      <RandomColor />
      <StarRating />
    </div>
  );
}

export default App;

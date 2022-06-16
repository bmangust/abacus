import "./App.css";
import { Board } from "./components/Board/Board";
import Controls from "./components/Controls/Controls";
function App() {
  return (
    <div className="App">
      Abacus
      <Board />
      <Controls />
    </div>
  );
}

export default App;

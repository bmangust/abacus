import css from "./App.module.css";
import { Board } from "./components/Board/Board";
import Controls from "./components/Controls/Controls";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className={css.App}>
      <h1 className={css.h1}>Abacus</h1>
      <Board />
      <Controls />
      <Footer />
    </div>
  );
}

export default App;

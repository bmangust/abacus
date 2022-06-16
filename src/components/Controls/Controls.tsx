import { observer } from "mobx-react-lite";
import type { ChangeEvent } from "react";
import { board, STYLES } from "../../state/board";
import css from "./Controls.module.css";

const Controls = observer(() => {
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "value")
      board.setValue(+e.currentTarget.value);
    else if (e.currentTarget.name === "numberOfRows")
      board.setNumberOfRows(+e.currentTarget.value);
    else if (e.currentTarget.name === "topStones")
      board.setTopStones(+e.currentTarget.value);
    else if (e.currentTarget.name === "bottomStones")
      board.setBottomStones(+e.currentTarget.value);
  };
  const handleChangeTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    board.setStyle(+e.currentTarget.value);
  };
  return (
    <div className={css.wrapper}>
      <div className={css.block}>
        <label htmlFor="value" className={css.label}>
          Value
        </label>
        <input
          name="value"
          className={css.input}
          type="number"
          value={board.value}
          onChange={handleChangeValue}
        />
      </div>
      <div className={css.block}>
        <label htmlFor="theme" className={css.label}>
          Theme
        </label>
        <select
          name="theme"
          className={css.input}
          value={board.style}
          onChange={handleChangeTheme}
        >
          <option value={STYLES.brown}>brown</option>
          <option value={STYLES.cyan}>cyan</option>
        </select>
      </div>
      <div className={css.block}>
        <label htmlFor="numberOfRows" className={css.label}>
          Number of rows
        </label>
        <input
          name="numberOfRows"
          className={css.input}
          type="number"
          value={board.numberOfRows}
          onChange={handleChangeValue}
        />
      </div>
      <div className={css.block}>
        <label htmlFor="topStones" className={css.label}>
          Top stones
        </label>
        <input
          name="topStones"
          className={css.input}
          type="number"
          value={board.topStones}
          onChange={handleChangeValue}
        />
      </div>
      <div className={css.block}>
        <label htmlFor="bottomStones" className={css.label}>
          Bottom stones
        </label>
        <input
          name="bottomStones"
          className={css.input}
          type="number"
          value={board.bottomStones}
          onChange={handleChangeValue}
        />
      </div>
    </div>
  );
});

export default Controls;

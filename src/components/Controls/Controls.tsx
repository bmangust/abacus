import { observer } from "mobx-react-lite";
import type { ChangeEvent } from "react";
import { board, STYLES } from "../../state/board";
import css from "./Controls.module.css";

const Controls = observer(() => {
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    board.setValue(+e.currentTarget.value);
  };
  const handleChangeTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    board.updateStyle(+e.currentTarget.value);
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
    </div>
  );
});

export default Controls;

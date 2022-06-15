import { observer } from "mobx-react-lite";
import { board } from "../../state/board";
import Row from "../Row/Row";
import css from "./Board.module.css";

export const Board = observer(() => {
  return (
    <div className={css.Board}>
      {[...board.rows].reverse().map((row, i) => (
        <Row row={row} key={i} />
      ))}
    </div>
  );
});

import { observer } from "mobx-react-lite";
import { board } from "../state/board";

type Props = {};

export const Board = observer((props: Props) => {
  return (
    <div>
      Board
      <div>
        {board.rows.map((row, i) => (
          <div key={i}>
            <span className="topValue">{row.topValue}</span>{" "}
            <span className="bottomValue">{row.bottomValue}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

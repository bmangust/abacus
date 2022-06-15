import { observer } from "mobx-react-lite";
import { board } from "../state/board";
import css from "./Board.module.css";

type Props = {};

export const Board = observer((props: Props) => {
  const getTopActive = (value: number, index: number): string => {
    if (value < 1) return "";
    else if (value < 2 && index === 0) return css.active;
    else return "";
  };
  const getBottomActive = (value: number, index: number): string => {
    return 3 - value === index ? css.active : "";
  };
  return (
    <div className={css.Board}>
      {[...board.rows].reverse().map((row, i) => (
        <div key={i} className={css.Row}>
          <div className={css.topValue}>
            <span>{row.topValue}</span>
            <span className="bottomValue">{row.bottomValue}</span>
          </div>
          <img src="/images/frame_01.png" alt="board" />
          <div className={css.TopStones}>
            {new Array(row.topStones).fill(0).map((v, i) => (
              <img
                key={i}
                src="/images/stone_01.png"
                alt="stone"
                className={getTopActive(row.topValue, i)}
              />
            ))}
          </div>

          <div className={css.BottomStones}>
            {new Array(row.bottomStones).fill(0).map((_, i) => (
              <img
                key={i}
                src="/images/stone_01.png"
                alt="stone"
                className={getBottomActive(row.bottomValue, i)}
              />
            ))}
            {/* <img
              key={i}
              src="/images/stone_01.png"
              alt="stone"
              //   className={css.active}
            /> */}
          </div>
          {/* <span className="topValue">{row.topValue}</span>{" "}
            <span className="bottomValue">{row.bottomValue}</span> */}
        </div>
      ))}
    </div>
  );
});

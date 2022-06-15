import type { Row as RowType } from "../../state/row";
import css from "./Row.module.css";

type Props = {
  row: RowType;
};

const Row = ({ row }: Props) => {
  const getTopActive = (value: number, index: number): string => {
    if (value < 1) return "";
    else if (value < 2 && index === 0) return css.active;
    else return "";
  };
  const getBottomActive = (
    value: number,
    index: number,
    numberOfStones: number
  ): string => {
    return numberOfStones - value === index + 1 ? css.active : "";
  };

  return (
    <div className={css.Row}>
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
            className={getBottomActive(row.bottomValue, i, row.bottomStones)}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;

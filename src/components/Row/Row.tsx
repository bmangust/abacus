import { observer } from "mobx-react-lite";
import type { Row as RowType } from "../../state/row";
import Stone from "../Stone/Stone";
import css from "./Row.module.css";

type Props = {
  row: RowType;
};

const Row = observer(({ row }: Props) => {
  return (
    <div className={css.Row}>
      <div className={css.topValue}>
        <span>{row.topValue}</span>
        <span className="bottomValue">{row.bottomValue}</span>
      </div>
      <img src={`/images/frame_0${row.style}.png`} alt="board" />
      <div className={css.TopStones}>
        {new Array(row.topStones).fill(0).map((v, i) => (
          <Stone
            key={i}
            index={i}
            style={row.style}
            topValue={row.topValue}
            numberOfStonesInRow={row.bottomStones}
          />
        ))}
      </div>

      <div className={css.BottomStones}>
        {new Array(row.bottomStones).fill(0).map((_, i) => (
          <Stone
            key={i}
            index={i}
            style={row.style}
            bottomValue={row.bottomValue}
            numberOfStonesInRow={row.bottomStones}
          />
        ))}
      </div>
    </div>
  );
});

export default Row;

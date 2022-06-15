import css from "./Stone.module.css";
import { STYLES } from "../../state/board";

type Props = {
  style: STYLES;
  topValue?: number;
  bottomValue?: number;
  index: number;
  numberOfStonesInRow: number;
};

const Stone = ({
  style,
  topValue,
  bottomValue,
  index,
  numberOfStonesInRow,
}: Props) => {
  const getActive = (): string => {
    if (topValue !== undefined && topValue < 1) return "";
    else if (topValue !== undefined && topValue < 2 && index === 0)
      return css.active;
    else if (
      bottomValue !== undefined &&
      numberOfStonesInRow - bottomValue === index + 1
    )
      return css.active;
    else return "";
  };

  return (
    <img
      src={`/images/stone_0${style}.png`}
      alt="stone"
      className={getActive()}
    />
  );
};

export default Stone;

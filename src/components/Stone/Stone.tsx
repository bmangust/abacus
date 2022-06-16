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
    let classname = "";
    if (topValue !== undefined && topValue < 1) return "";
    else if (topValue !== undefined && topValue < 2 && index === 0)
      classname = css.active;
    else if (
      bottomValue !== undefined &&
      numberOfStonesInRow - bottomValue === index + 1
    )
      classname = css.active;
    // console.log({
    //   topValue,
    //   bottomValue,
    //   numberOfStonesInRow,
    //   index,
    //   classname,
    // });
    return classname;
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

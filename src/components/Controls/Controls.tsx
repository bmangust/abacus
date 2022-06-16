import { observer } from "mobx-react-lite";
import type { ChangeEvent } from "react";
import { board } from "../../state/board";

const Controls = observer(() => {
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    board.setValue(+e.currentTarget.value);
  };
  return (
    <div>
      <input type="number" value={board.value} onChange={handleChangeValue} />
    </div>
  );
});

export default Controls;

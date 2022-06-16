import { makeAutoObservable } from "mobx";
import { Row } from "./row";

export enum STYLES {
  "brown" = 1,
  "cyan" = 2,
}

export interface BoardProps {
  numberOfRows?: number;
  value?: number;
  topStones?: 1 | 2;
  bottomStones?: number;
  style?: STYLES;
}

class Board {
  numberOfRows: number;
  value: number;
  style: STYLES;
  topStones?: 1 | 2;
  bottomStones?: number;
  rows: Row[];
  constructor(props: BoardProps) {
    this.value = props.value || 0;
    this.numberOfRows = Math.max(
      props.numberOfRows || 0,
      this.getNumberOfRows()
    );
    this.topStones = props.topStones;
    this.bottomStones = props.bottomStones;
    this.style = props.style || STYLES.brown;
    this.rows = this.getRows(this);
    makeAutoObservable(this);
  }

  private getRows(board: Board) {
    return new Array(board.numberOfRows).fill(0).map(
      (_, i) =>
        new Row({
          ...board,
          value: Math.floor(
            (this.value % Math.pow(10, i + 1)) / Math.pow(10, i)
          ),
        })
    );
  }

  /** return number of digits of board.value */
  getNumberOfRows() {
    let rows = 1;
    let value = this.value;
    while (value > 10) {
      rows += 1;
      value = Math.floor(value / 10);
    }
    return rows;
  }

  updateStyle(style: STYLES) {
    this.style = style;
    this.rows.forEach((row) => row.updateStyle(style));
  }

  setValue(value: number) {
    this.value = value;
    this.rows = this.getRows({
      ...this,
      value,
    });
  }

  setNumberOfRows(n: number) {
    this.rows = this.getRows({
      ...this,
      numberOfRows: n,
    });
  }

  add(value: number) {
    this.value += value;
  }

  subtract(value: number) {
    this.value -= value;
  }
}

export const board = new Board({
  value: 123456789,
  numberOfRows: 4,
  topStones: 2,
  bottomStones: 5,
  style: STYLES.cyan,
});

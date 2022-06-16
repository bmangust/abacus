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
      this.getNumberOfRows(this.value)
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
  getNumberOfRows(value: number) {
    let rows = 1;
    while (value >= 10) {
      rows += 1;
      value = Math.floor(value / 10);
    }
    console.log({ rows });
    return rows;
  }

  setNumberOfRows(n: number) {
    // Don't compare with this.numberOfRows here.
    // User may decrease numberOfRows to 1 and then restore.
    // Value won't change
    if (n < 1) return;
    this.rows = this.getRows({
      ...this,
      numberOfRows: n,
    });
    this.numberOfRows = n;
  }

  setStyle(style: STYLES) {
    this.style = style;
    this.rows.forEach((row) => row.updateStyle(style));
  }

  setValue(value: number) {
    if (value < 0) return;
    this.value = value;
    this.numberOfRows = Math.max(
      this.numberOfRows,
      this.getNumberOfRows(value)
    );
    console.log(this.numberOfRows);
    this.rows = this.getRows({
      ...this,
      value,
    });
  }
}

export const board = new Board({
  value: 123456789,
  numberOfRows: 4,
  topStones: 2,
  bottomStones: 5,
  style: STYLES.cyan,
});

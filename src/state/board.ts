import { makeAutoObservable } from "mobx";
import { Row } from "./row";

export enum STYLES {
  "brown" = 1,
  "cyan" = 2,
}

export interface BoardProps {
  numberOfRows?: number;
  state?: number;
  topStones?: 0 | 1 | 2;
  bottomStones?: number;
  style?: STYLES;
}

class Board {
  state: number;
  rows: Row[];
  style: number;
  constructor({
    numberOfRows,
    state,
    topStones = 1,
    bottomStones = 4,
    style = STYLES.brown,
  }: BoardProps) {
    console.log({ state, rows: numberOfRows || this.numberOfRows });
    this.state = state || 0;
    this.rows = new Array(numberOfRows || this.numberOfRows).fill(0).map(
      (_, i) =>
        new Row({
          topStones,
          bottomStones,
          value: Math.floor(
            (this.state % Math.pow(10, i + 1)) / Math.pow(10, i)
          ),
          style,
        })
    );
    this.state = state || 0;
    this.style = style;
    makeAutoObservable(this);
  }

  get numberOfRows() {
    let rows = 1;
    let value = this.state;
    while (value > 10) {
      rows += 1;
      value = Math.floor(value / 10);
    }
    console.log(rows);
    return rows;
  }

  updateStyle(style: STYLES) {
    this.style = style;
    this.rows.forEach((row) => row.updateStyle(style));
  }

  add(value: number) {
    this.state += value;
  }

  subtract(value: number) {
    this.state -= value;
  }
}

export const board = new Board({
  state: 13,
  numberOfRows: 4,
  topStones: 1,
  style: STYLES.cyan,
});

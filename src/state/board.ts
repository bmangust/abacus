import { makeAutoObservable } from "mobx";
import { Row } from "./row";

export interface BoardProps {
  numberOfRows?: number;
  state?: number;
  topStones?: 0 | 1 | 2;
  bottomStones?: number;
}

class Board {
  state: number;
  rows: Row[];
  constructor({
    numberOfRows,
    state,
    topStones = 1,
    bottomStones = 4,
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
        })
    );
    this.state = state || 0;
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

  add(value: number) {
    this.state += value;
  }

  subtract(value: number) {
    this.state -= value;
  }
}

export const board = new Board({ state: 13, numberOfRows: 4, topStones: 1 });

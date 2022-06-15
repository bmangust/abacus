import { makeAutoObservable } from "mobx";

export interface BoardProps {
  numberOfRows?: number;
  state?: number;
  topStones?: 0 | 1 | 2;
  bottomStones?: number;
}

export interface RowProps {
  topStones?: 0 | 1 | 2;
  bottomStones?: number;
  value: number;
}

class Row {
  topStones: 0 | 1 | 2;
  bottomStones: number;
  value: number;
  constructor({ topStones = 1, bottomStones, value }: RowProps) {
    this.topStones = topStones;
    this.bottomStones = bottomStones || topStones * 5 || 5;
    if (value > 10) throw new Error(`Value ${value} is more than 10`);
    this.value = value;
    makeAutoObservable(this);
  }

  get topValue() {
    return this.topStones ? Math.floor(this.value / 5) : 0;
  }

  get bottomValue() {
    return this.topStones
      ? Math.floor(this.value % this.bottomStones)
      : this.value;
  }
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

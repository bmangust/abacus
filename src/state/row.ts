import { makeAutoObservable } from "mobx";
import { STYLES } from "./board";

export interface RowProps {
  topStones?: 1 | 2;
  bottomStones?: number;
  value: number;
  style?: number;
}

export class Row {
  topStones: 0 | 1 | 2;
  bottomStones: number;
  value: number;
  style: number;
  constructor({ topStones = 1, bottomStones = 4, value, style = 1 }: RowProps) {
    this.topStones = topStones;
    this.bottomStones = bottomStones;
    if (value > 10) throw new Error(`Value ${value} is more than 10`);
    this.value = value;
    this.style = style;
    makeAutoObservable(this);
  }

  get topValue() {
    return this.topStones ? Math.floor(this.value / 5) : 0;
  }

  get bottomValue() {
    return Math.floor(this.value % 5);
  }

  updateStyle(style: STYLES) {
    this.style = style;
  }
}

import { makeAutoObservable } from "mobx";

export interface RowProps {
  topStones?: 0 | 1 | 2;
  bottomStones?: number;
  value: number;
}

export class Row {
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

import { FactorialStrategy } from "./factorial-strategy-interface";

export class FactorialStrategyArrayReduce implements FactorialStrategy {

  private _name: string = 'array + reduce';

  factorial(num: number): number {

    const n = Math.abs(Math.trunc(num));
    const arr = Array.from(Array(n + 1).keys()).slice(1);

    if (arr.length == 0) return undefined;
    else return arr.reduce((a, c) => a * c);
  }

  get name() {
    return this._name;
  }

}  
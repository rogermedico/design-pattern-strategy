import { FactorialStrategy } from "./factorial-strategy-interface";

export class FactorialStrategyLoop implements FactorialStrategy {

  private _name: string = 'loop';

  factorial(num: number): number {

    const n = Math.abs(Math.trunc(num));
    let result = 1;

    for (let i = 2; i <= n; i++) {
      result = result * i;
    }

    return result;
  }

  get name() {
    return this._name;
  }

}  
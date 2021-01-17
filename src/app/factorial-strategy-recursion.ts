import { FactorialStrategy } from "./factorial-strategy-interface";

export class FactorialStrategyRecursion implements FactorialStrategy {

  private _name: string = 'recursion';

  factorial(num: number): number {

    const n = Math.abs(Math.trunc(num));

    if (n === 0 || n === 1) {
      return 1;
    }
    else {
      return this.factorial(n - 1) * n;
    }
  }

  get name() {
    return this._name;
  }

}  
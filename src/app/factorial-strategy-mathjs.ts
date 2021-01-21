import { FactorialStrategy } from "./factorial-strategy-interface";
import { factorial } from 'mathjs'

export class FactorialStrategyMathjs implements FactorialStrategy {

  private _name: string = 'mathjs';

  factorial(num: number): number {
    const n = Math.abs(Math.trunc(num));
    return factorial(n);
  }

  get name() {
    return this._name;
  }

}  
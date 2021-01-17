import { FactorialStrategy } from "./factorial-strategy-interface";
import { factorial } from 'mathjs'

export class FactorialStrategyMathjs implements FactorialStrategy {

  private _name: string = 'mathjs';

  factorial(num: number): number {
    return factorial(num);
  }

  get name() {
    return this._name;
  }

}  
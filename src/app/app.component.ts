import { Component } from '@angular/core';
import { FactorialStrategyLoop } from './factorial-strategy-loop';
import { FactorialStrategy } from './factorial-strategy-interface';
import { FactorialStrategyRecursion } from './factorial-strategy-recursion';
import { FactorialStrategyArrayReduce } from './factorial-strategy-array-reduce';
import { FactorialStrategyMathjs } from './factorial-strategy-mathjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /* template variables */
  strategy: string = null;
  num: number = null;
  result: number = null;

  /* interface */
  private _factorialStrategy: FactorialStrategy = null;

  /* strategies implementation */
  private _factorialStrategyRecursion = new FactorialStrategyRecursion();
  private _factorialStrategyLoop = new FactorialStrategyLoop();
  private _factorialStrategyArrayReduce = new FactorialStrategyArrayReduce();
  private _factorialStrategyMathjs = new FactorialStrategyMathjs();

  /* action */
  factorial(n: number) {
    this.result = this.factorialStrategy.factorial(n);
    this.strategy = this.factorialStrategy.name;
    this.num = Math.trunc(n);
  }

  /* setters */
  set factorialStrategy(strategy: FactorialStrategy) { this._factorialStrategy = strategy }

  /* getters */
  get factorialStrategy() { return this._factorialStrategy }
  get factorialStrategyRecursion() { return this._factorialStrategyRecursion }
  get factorialStrategyLoop() { return this._factorialStrategyLoop }
  get factorialStrategyArrayReduce() { return this._factorialStrategyArrayReduce }
  get factorialStrategyMathjs() { return this._factorialStrategyMathjs }

}

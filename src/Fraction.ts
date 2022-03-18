import { hcf, lcm } from './utils/hcf-lcm';

export class Fraction {
  private _num: number = 0;
  private _den: number = 1;

  get numerator() {
    return this._num;
  }
  set numerator(value: number) {
    this._num = value;
  }

  get denominator() {
    return this._den;
  }
  set denominator(value: number) {
    if (value === 0) {
      throw new Error('Denominator cannot be 0');
    }
    this._den = value;
  }

  constructor(numerator: number, denominator: number) {
    this._num = numerator;
    this._den = denominator;
  }

  simplest(): Fraction {
    const h = hcf(this._num, this._den);
    return new Fraction(this._num / h, this._den / h);
  }

  simplify(): void {
    const h = hcf(this._num, this._den);
    this._num /= h;
    this._den /= h;
  }

  toString(): string {
    return `${this._num}/${this._den}`;
  }

  static add(frac1: Fraction, frac2: Fraction): Fraction {
    const lcmOfDen = lcm(frac1._den, frac2._den);
    const num1 = (lcmOfDen / frac1._den) * frac1._num;
    const num2 = (lcmOfDen / frac2._den) * frac2._num;

    return new Fraction(num1 + num2, lcmOfDen).simplest();
  }

  static subtract(frac1: Fraction, frac2: Fraction): Fraction {
    const lcmOfDen = lcm(frac1._den, frac2._den);
    const num1 = (lcmOfDen / frac1._den) * frac1._num;
    const num2 = (lcmOfDen / frac2._den) * frac2._num;

    return new Fraction(num1 - num2, lcmOfDen).simplest();
  }

  static multiply(frac1: Fraction, frac2: Fraction): Fraction {
    return new Fraction(
      frac1._num * frac2._num,
      frac1._den * frac2._den
    ).simplest();
  }

  static divide(frac1: Fraction, frac2: Fraction): Fraction {
    return new Fraction(
      frac1._num * frac2._den,
      frac1._den * frac2._num
    ).simplest();
  }
}

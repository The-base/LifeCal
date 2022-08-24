export type Unit = "Weeks" | "Months" | "Years";

export interface IUnit {
  text: Unit;
  interval: number;
  rowCount: number;
  squareWidth: number;
  columnCount: number;
}

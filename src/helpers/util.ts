import { IUnit } from "../types/types";

export const units: IUnit[] = [
  {
    text: "Weeks",
    interval: 7,
    rowCount: 52,
    columnCount: 90,
    squareWidth: 3,
  },
  {
    text: "Months",
    interval: 30,
    rowCount: 36,
    squareWidth: 5,
    columnCount: 30,
  },
  {
    text: "Years",
    interval: 365,
    rowCount: 10,
    squareWidth: 10,
    columnCount: 9,
  },
];

export const arrays: { [key: string]: string[] } = {
  weeks: new Array(units[0].rowCount * units[0].columnCount).fill(""),
  months: new Array(units[1].rowCount * units[1].columnCount).fill(""),
  years: new Array(units[2].rowCount * units[2].columnCount).fill(""),
};

export const MAX_YEAR = 90;

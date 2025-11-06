// This is the *correct* way to type an ES module
import { RowID, RowElement } from './interface';
declare module './crud.js' {
  export function insertRow(row: RowElement): number; // Using number from hint
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
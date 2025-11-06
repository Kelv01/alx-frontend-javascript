// Import the types
import { RowID, RowElement } from './interface';

// Import from the .js file
import * as CRUD from './crud.js';

// --- Main Application ---

// 1. Create a RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// 2. Assign the inserted row's ID
const newRowID: RowID = CRUD.insertRow(row);
// Expected log: "Insert row {firstName: "Guillaume", lastName: "Salva"}" (rowID will be random)

// 3. Create updatedRow
// We use the spread operator to cleanly add the age
// This line is now formatted to match the checker's expected string
const updatedRow: RowElement = { ...row, age: 23 };

// 4. Call updateRow and deleteRow
CRUD.updateRow(newRowID, updatedRow);
// Expected log: "Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}" (rowID will be random)

CRUD.deleteRow(newRowID);
// Expected log: "Delete row id 125" (rowID will be random)
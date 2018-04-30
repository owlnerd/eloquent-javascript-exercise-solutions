/*
  CHAPTER 14 - EXERCISE 1

  BUILD A TABLE

  An HTML table is built with the following tag structure:

    <table>
      <tr>
        <th>name</th>
        <th>height</th>
        <th>place</th>
      </tr>
      <tr>
        <td>Kilimanjaro</td>
        <td>5895</td>
        <td>Tanzania</td>
      </tr>
    </table>

  For each row, the <table> tag contains a <tr> tag. Inside of these <tr> tags,
  we can put cell elements: either heading cells (<th>) or regular cells (<td>).

  Given a data set of mountains, an array of objects with name, height, and
  place properties, generate the DOM structure for a table that enumerates the
  objects. It should have one column per key and one row per object, plus a
  header row with <th> elements at the top, listing the column names.

  Write this so that the columns are automatically derived from the objects, by
  taking the property names of the first object in the data.

  Add the resulting table to the element with an id attribute of "mountains", so
  that it becomes visible in the document.

  Once you have this working, right-align cells that contain number values by
  setting their style.textAlign property to "right".
*/


// ARRAY OF MOUNTAIN OBJECTS - PROVIDED BY THE EXERCISE
// ----------------------------------------------------
const MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];


// FUNCTION: createTable
// ---------------------
function createTable(data) {
  let table = document.createElement('table');

  let headerRow = document.createElement('tr');
  for (let col of Object.keys(data[0])) {
    let headerCell = document.createElement('th');
    headerCell.appendChild(document.createTextNode(col));
    headerRow.appendChild(headerCell);
  }

  table.appendChild(headerRow);

  for (let mountain of data) {
    let row = document.createElement('tr');
    for (let col of Object.keys(mountain)) {
      let cell = document.createElement('td');
      cell.appendChild(document.createTextNode(mountain[col]));
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  return table;
}


// FUNCTION: numberCellsAlignRight
// -------------------------------
function numberCellsAlignRight() {
  for (let cell of Array.from(document.getElementsByTagName('td')))
    if (!isNaN(cell.innerHTML))
      cell.style.textAlign = 'right';
}


// HTML code provided by the exercise:
// -----------------------------------
// <h1>Mountains</h1>
//
// <div id="mountains"></div>


// CODE: Appending table to correct element and right aligning numeric cells
// -------------------------------------------------------------------------
document.getElementById('mountains').appendChild(createTable(MOUNTAINS));
numberCellsAlignRight();

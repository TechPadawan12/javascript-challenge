// from data.js
var tableData = data;

// retrievea the table references
var tbody = d3.select("tbody");

function buildTable(data) {
  //clear  existing data
  tbody.html("");

  // loop through object appending data in for each value in cell
   
  data.forEach((dataRow) => {
    // Append row to the table body
    var row = tbody.append("tr");

    // Loop through each field in row adding each value
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // Take date value from the filter
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Filter the data using that date after date entered.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data
  
  buildTable(filteredData);
}

//  listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

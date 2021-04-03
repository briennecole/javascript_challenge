// from data.js
var tableData = data;
const tbody = d3.select("tbody");

// YOUR CODE HERE!
// View table
//console.log(tableData)

// Create function to import data into table
function generateTable(tableData) {
    tableData.forEach(sighting => {
        let row = tbody.append("tr");
        Object.values(sightings).forEach()
    })
}

//Input table
generateTable(tableData);

//Create Filter Button
//Event listener
var button = d3.select("#filter-btn"); {
    button.on
}
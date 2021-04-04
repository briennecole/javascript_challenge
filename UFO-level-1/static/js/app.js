// from data.js
var tableData = data;
const tbody = d3.select("tbody");

// YOUR CODE HERE!
// View table
//console.log(tableData)

// Create function to import data into table
function generateTable(tableData) {
    tableData.forEach((sightings) => {
        let row = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
};

//Input table
generateTable(tableData);

//Select Filter Button
var button = d3.select("#filter-btn");

//Create event listener 
button.on("click", function() {
    console.log("Hi, a button was clicked");

// button.on("click", runEnter);

//function runEnter() {

    //Clear out table 
    tbody.html("");

    //Prevent Default
    d3.event.preventDefault();

    //Select Input Element
    let inputElement = d3.select("#datetime");

    //Pull input element value
    let inputValue = inputElement.property("value");
    //console.log(inputValue);

    //Show filtered data in table for selected date
    var filterDate = tableData.filter(sightings => sightings.datetime === inputValue);
    console.log(filterDate)

    // clears the html page before displaying the filtered rows
    tbody.html("")
    // Use d3 to append one table row `tr` for each ufo data object
    filterDate.forEach((sightings) => {
        let row = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
});
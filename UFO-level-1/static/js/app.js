// from data.js
var tableData = data;
const tbody = d3.select("tbody");

// YOUR CODE HERE!
// View table
//console.log(tableData)

// Create function to import data into table
function generateTable(tableData) {
    tableData.forEach(sightings => {
        let row = tbody.append("tr");
        Object.values(sightings).forEach(value => {
            let object = row.append("td");
            object.text(value);
        });
    });
}

//Input table
generateTable(tableData);

//Select Filter Button
var button = d3.select("#filter-btn");

//Create event listener 
button.on("click", runEnter);

function runEnter() {

    //Prevent Default
    d3.event.preventDefault();

    //Select Input Element
    let inputElement = d3.select("#datetime");

    //Return input element value
    let inputValue = inputElement.property("value");
    console.log(inputValue);

}

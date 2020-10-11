//Started 8;15 am PST
// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //create elements
    const header_div = document.createElement("div");
    const header_span_date = document.createElement("span");
    const header_h1 = document.createElement("h1");
    const header_span_temperature = document.createElement("span");
    //add classes
    header_div.classList.add("header");
    header_span_date.classList.add("date");
    header_span_temperature.classList.add("temp");
    //add content
    header_span_date.textContent = "MARCH 28, 2020";
    header_h1.textContent = "Lambda Times";
    header_span_temperature.textContent = "98 Degrees";
    //append to header class
    header_div.appendChild(header_span_date);
    header_div.appendChild(header_h1);
    header_div.appendChild(header_span_temperature);
    //return
    return header_div;

}
const header_return = document.querySelector(".header-container");
header_return.appendChild(Header());

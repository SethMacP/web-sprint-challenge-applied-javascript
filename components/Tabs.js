// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
const topic_return = document.querySelector(".topics");
// console.log("selector" , topic_return);

axios.get("https://lambda-times-api.herokuapp.com/topics")
.then(
    (res) => {
    const topic_data = res.data;
    console.log("pull data", topic_data);
    makeTopic(topic_data)
})

.catch(err => console.log(err));


const makeTopic = (arr) => {
//create element for each item in array
arr.topics.forEach((element => {
    const topic_div = document.createElement("div");
    topic_div.classList.add("tab");
    topic_div.textContent = element;
    topic_return.appendChild(topic_div);
    return topic_div;
}))

};

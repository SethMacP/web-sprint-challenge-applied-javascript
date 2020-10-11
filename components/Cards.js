// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cards_return = document.querySelector(".cards-container");
// console.log("Append Target", cards_return);


axios.get("https://lambda-times-api.herokuapp.com/articles")
//on success
.then(result => {
    // console.log("success",result)
    //
    const article_data = result.data.articles;
    // console.log("article data/the pull", article_data)
    const article_data_topics = Object.keys(article_data);
    // console.log("keys", article_data_topics)
    // console.log("article_data.bootstrap", article_data.bootstrap);
   //setup variables for each topic
   const article_bootstrap = article_data.bootstrap;
   const article_javascript = article_data.javascript
   const article_jquery = article_data.jquery;
   const article_node = article_data.node;
   const article_technology = article_data.technology;
   const article_holder = [
       article_bootstrap, article_javascript,
        article_jquery,   article_node,
        article_technology]
    //start itteration
    // console.log(article_holder);
    article_holder.forEach(function(topicArray){
        topicArray.forEach(function(ele){
            cards_return.appendChild(makeCard(ele))
        })
    })
    })
//on fail
.catch(err=>console.log("Error", err));

const makeCard = (obj) => {
//create elements
    const card_div_main = document.createElement("div");
    const card_div_headline = document.createElement("div");
    const card_div_author = document.createElement("div");
    const card_div_img = document.createElement("div");
    const card_img = document.createElement("img");
    const card_span = document.createElement("span");
//add classes
    card_div_main.classList.add("card");
    card_div_headline.classList.add("headline");
    card_div_author.classList.add("author");
    card_div_img.classList.add("img-container");
//attach content to each item
    card_div_headline.textContent = obj.headline;
    // card_div_author.textContent = obj.authorName;
    card_img.src = obj.authorPhoto;
    card_span.textContent = `By: ${obj.authorName}`;

//append together
    card_div_main.appendChild(card_div_headline);
    card_div_main.appendChild(card_div_author);
    card_div_author.appendChild(card_div_img);
    card_div_img.appendChild(card_img);
    card_div_author.appendChild(card_span);

    //added late
    
    
//return
    return card_div_main;
    
}
const oldCardFinder = document.getElementsByClassName("card");
console.log("oldCardFinder",oldCardFinder)
const cardFinder = Array.from(oldCardFinder);
console.log("cardFinder",cardFinder)

const promiseCardFinder = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=> {
            resolve((time +=1000));
        }, 1000);
    });
};

cardFinder().then(function(){
    const oldCardFinder = document.getElementsByClassName("card");
    console.log("oldCardFinder",oldCardFinder)
    const cardFinder = Array.from(oldCardFinder);
    console.log("cardFinder",cardFinder)
})
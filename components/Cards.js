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


axios.get("https://lambda-times-api.herokuapp.com/articles")
//on success
.then(result => {
    console.log("success",result)
    //
    const article_data = result.data.articles;
    console.log("Original object", article_data)



    //
    article_data.forEach((ele)=>{
        ele.forEach(
            cards_return.appendChild(makeCard(article_data))
        )
        
    });
    //
    
    
    })
//on fail
.catch(err=>console.log("Error", err));

const makeCard = (arr) => {
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
    card_div_headline.textContent = arr.headline;
    // card_div_author.textContent = arr.authorName;
    card_img.src = arr.authorPhoto;
    card_span.textContent = `By: ${arr.authorName}`;

//append together
    card_div_main.appendChild(card_div_headline);
    card_div_main.appendChild(card_div_author);
    card_div_author.appendChild(card_div_img);
    card_div_img.appendChild(card_img);
    card_div_author.appendChild(card_span);

    
//return
    return card_div_main;
    
}

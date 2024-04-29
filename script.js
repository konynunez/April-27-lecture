/*
Steps 
1. Create blank repository called “April-27-lecture” with README
2. Clone down to local within Codex folder
3. Add index.html, script.js
4. Link the 2 files
5. ACP
6. Add an empty <ul>
7. On page load, get 5 products from fakestoreapi
8. or each, create an <li> with content “productName: price”
8. ACP
9. Add a button and empty <p>
10. When button is clicked, get a product name from fakestoreapi 
11. Put the product name in empty <p>
12. ACP
*/

function getTitles() {
    fetch("https://fakestoreapi.com/products?limit=5")
    .then((data) => {
        if (!data.ok) {
            throw new Error('Network response was not ok');
        }
        return data.json();
    })
    .then ((products) => {
        console.log(products);
        let list = document.querySelector("ul");
        for(let i = 0; i < products.length; i++) {
            let newLi = document.createElement("li");
            newLi.textContent = products[i].title;
            list.appendChild(newLi);
        }
    })
    .catch((err) => {
        console.log('Fetch Error :-S', err);
    })
  }
  getTitles();
const fetchBooks = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
    .then((responseObj) =>{
        console.log("RESPONSE OBJECT", responseObj)

        if(responseObj.ok) {
            return responseObj.json()
        }else{
            throw new Error ("Errore")
        }
    } )
    .then((booksObj) => {
        const row = document.getElementById('card-container');

        booksObj.forEach((book) => {
            const col = document.createElement("div");
            col.classList.add("col");
            
            const card = document.createElement("div");
            card.classList.add("card","h-100", "d-flex", "flex-column");
            
            const img = document.createElement("img");
            img.classList.add("card-img-top","h-50");
            img.src = book.img;
            img.alt = book.title;

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body" ,"d-flex", "flex-column", "justify-content-between", "flex-grow-1");

            const cardTitle = document.createElement("h4");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = book.title;

            const cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.textContent = `${book.price} €`;

            const buttonOfRemove = document.createElement("button");
            buttonOfRemove.classList.add("btn", "btn-danger");
            buttonOfRemove.textContent = "Remove";
            buttonOfRemove.addEventListener('click', () => {
              col.remove();
            });
          
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(buttonOfRemove);
            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);
            row.appendChild(col);
          });
        })
        .catch((err) => console.log(err));
    };
    

    window.addEventListener("DOMContentLoaded", () => {
      fetchBooks();
    });
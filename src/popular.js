// API Popular
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0d84c0fa2dmsh0388eefd6663e6bp13b68ajsn4f29899321fc",
    "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
  },
};
fetch("https://gogoanime2.p.rapidapi.com/popular", options)
  .then((response) => response.json())

  // cards
  .then((response) => {
    console.log(response);

    // select all elements with class name "card"
    const cards = document.getElementsByClassName("card");

    // iterate over the collection of elements
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const animeUrl = response[i].animeUrl;

      card.style.backgroundImage = `url(${response[i].animeImg})`;
      card.style.backgroundSize = "cover";

            // Create a new div element to hold the anime title
            const titleDiv = document.createElement("div");
            titleDiv.classList.add("card-info");
            titleDiv.innerHTML = response[i].animeTitle;
      
            // Append the title div to the card div
            card.appendChild(titleDiv);

      card.addEventListener("click", () => {
        window.open(animeUrl, "_blank");
      });
    }
  });

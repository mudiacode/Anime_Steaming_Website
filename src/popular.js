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

    const heroBg = document.getElementsByClassName("hero");
    // const popularNumDiv = document.createElement("div");

    // popularNumDiv.classList.add("popularNum");

    // iterate over the collection of elements
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const popular = () => {
        card.style.backgroundImage = `url(${response[i].animeImg})`;
        card.style.backgroundSize = "cover";
      };



      popular();
    }
  })
  .catch((err) => console.error(err));

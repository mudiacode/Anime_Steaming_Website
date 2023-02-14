const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0d84c0fa2dmsh0388eefd6663e6bp13b68ajsn4f29899321fc",
    "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
  },
};

fetch("https://gogoanime2.p.rapidapi.com/popular", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    const heroBg = document.getElementsByClassName("hero")[0];
    heroBg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${response[2].animeImg})`;

    document.getElementsByClassName(
      "heroh1"
    )[0].innerHTML = `${response[2].animeTitle}`;

    document.getElementsByClassName(
      "release"
    )[0].innerHTML = `${response[2].releasedDate}`;

    const button = document.getElementsByClassName("button")[0];
    button.addEventListener("click", () => {
      window.location.href = `${response[2].animeUrl}`;
    });
  })
  .catch((err) => console.error(err));

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0d84c0fa2dmsh0388eefd6663e6bp13b68ajsn4f29899321fc",
    "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
  },
};

fetch("https://gogoanime2.p.rapidapi.com/?page=1", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    
  })
  .catch((err) => console.error(err));

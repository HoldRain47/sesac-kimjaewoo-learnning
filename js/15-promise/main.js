fetch("https://example.com")
  .then((response) => {
    console.log(response);
    return response.text();
  })
  .then((data) => {
    console.log(data);
  });

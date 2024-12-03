const data = "./data.json";
const container = document.getElementById("innerContainer");

function fetchData() {
  fetch(data)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        const div = document.createElement("div");
        div.id = "card";
        // Fruit image
        const fruit_img = document.createElement("img");
        fruit_img.src = data[i].image_url;
        // Fruit name
        const fruit_name = document.createElement("h1");
        fruit_name.innerText = data[i].fruit_name;
        // Fruit benefit
        const fruit_benefit = document.createElement("p");
        fruit_benefit.innerText = data[i].benefit;

        div.appendChild(fruit_img);
        div.appendChild(fruit_name);
        div.appendChild(fruit_benefit);
        container.appendChild(div);
      }
    })
    .catch((error) => console.log(error));
}
fetchData();

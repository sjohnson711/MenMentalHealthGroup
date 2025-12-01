const container = document.getElementById("testimonies");

function setStored() {
  let stored = JSON.parse(localStorage.getItem("testimony")) || [];

  stored.forEach((testimony) => {
    let newCard = document.createElement("div");
    newCard.setAttribute("id", "card");
    newCard.innerHTML = `
    <h1>${testimony.name}</h1>
    <p>${testimony.area}</p>
    `;
   container.appendChild(newCard)
  
  });
}

const handleSubmit = (e) => {
  e.preventDefault();

  const name = document.getElementById("test-name").value.split(" ");
  const area = document.getElementById("test-area").value;

  const testimony = { name, area };

  let stored = JSON.parse(localStorage.getItem("testimony")) || [];

  stored.push(testimony);
  localStorage.setItem("testimony", JSON.stringify(stored));

  setStored();

  document.getElementById("test-name").value = "";
  document.getElementById("test-area").value = "";
};

const button = document.getElementById("sub-btn");
button.addEventListener("click", handleSubmit);

setStored();
console.log("script loaded");

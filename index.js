const handleSubmit = (e) => {
  e.preventDefault();

  const name = document.getElementById("test-name").value.split(" ");
  const area = document.getElementById("test-area").value;
  const container = document.getElementById("testimonies");

  const testimony = { name, area };

  localStorage.setItem("testimony", JSON.stringify(testimony));

  const saved = localStorage.getItem("testimony");

  if (saved) {
    const loading = document.createElement("div");
    loading.innerHTML = `Loading...`;

    container.appendChild(loading);
    setTimeout(() => {
      const localdiv = document.createElement("div");
      localdiv.setAttribute("id", "card");
      localdiv.innerHTML = `
        <h1>~${name[0]}</h1>
        <p>${area}</p>
    `;
      container.removeChild(loading);
      container.appendChild(localdiv);
    }, 10000);
  } else {
    JSON.parse(testimony);
  }

  document.getElementById("test-name").value = "";
  document.getElementById("test-area").value = "";
};

const button = document.getElementById("sub-btn");
button.addEventListener("click", handleSubmit);

const testimonies = document.getElementById("testimonies");
const testimonyInput = document.getElementById('testInput')


const newCard = document.createElement("div");
newCard.setAttribute("id", "card");
newCard.innerHTML = `
    <h1>~Johnon</h1>
    <p>I have been with these guys for a while and I am thankful to meet them</p>
`;

testimonies.appendChild(newCard);

const newCard1 = document.createElement("div");
newCard1.setAttribute("id", "card");
newCard1.innerHTML = `
    <h1>~Keisha</h1>
    <p>Thankful for the times that Jaylon spent time with Mr. Seth and the tutoring and fatherhood he provided Jaylon with. I would recommend this team of professionals a 10 out of 10!
`;
testimonies.appendChild(newCard1);



//---------------------------------//
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");

// RECUPERO GLI ELEMENTI DALLA PAGINA

const cardContainer = document.querySelector(".cols");

// CREO L'ARRAY DI OGGETTI

const team = [
    { name: "Wayne Barnett", role: "Founder & CEO", image: "wayne-barnett-founder-ceo.jpg" },
    { name: "Angela Caroll", role: "Chief Editor", image: "angela-caroll-chief-editor.jpg" },
    { name: "Walter Gordon", role: "Office Manager", image: "walter-gordon-office-manager.jpg" },
    { name: "Angela Lopez", role: "Social Media Manager", image: "angela-lopez-social-media-manager.jpg" },
    { name: "Scott Estrada", role: "Developer", image: "scott-estrada-developer.jpg" },
    { name: "Barbara Ramos", role: "Graphic Designer", image: "barbara-ramos-graphic-designer.jpg" },
];

console.table(team)

// CREO UNA VARIABILE DI APPOGGIO PER POI STAMPARE LA CARD IN PAGINA
let cards = "";

// USO UN CICLO
for (let member of team) {
    // MONTO LA CARD E METTO DEGLI ELEMENTI DINAMICI
    cards += `
    <div class="card">
    <img src="img/${member.image}" alt="${member.name}">
    <h3 class="mt-20">${member.name}</h3>
    <p class="mt-10">${member.role}</p>                  
    </div>
    `
}

// STAMPO IN PAGINA
cardContainer.innerHTML = cards;




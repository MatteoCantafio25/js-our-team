//---------------------------------//
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");

// RECUPERO GLI ELEMENTI DALLA PAGINA

const wayneElement = document.getElementById("wayne");
const angelaElement = document.getElementById("angela");
const walterElement = document.getElementById("walter");
const lopezElement = document.getElementById("lopez");
const scottElement = document.getElementById("scott");
const barbaraElement = document.getElementById("barbara");



// CREO L'ARRAY DI OGGETTI

const team = [
    { name: "Wayne Barnett", role: "Founder & CEO", image: "img/wayne-barnett-founder-ceo.jpg" },
    { name: "Angela Caroll", role: "Chief Editor", image: "img/angela-caroll-chief-editor.jpg" },
    { name: "Walter Gordon", role: "Office Manager", image: "img/walter-gordon-office-manager.jpg" },
    { name: "Angela Lopez", role: "Social Media Manager", image: "img/angela-lopez-social-media-manager.jpg" },
    { name: "Scott Estrada", role: "Developer", image: "img/scott-estrada-developer.jpg" },
    { name: "Barbara Ramos", role: "Graphic Designer", image: "img/barbara-ramos-graphic-designer.jpg" },
];

console.table(team)

wayneElement.innerHTML = `
<img src="${team[0].image}" alt="${team[0].name}">
<h3 class="mt-20">${team[0].name}</h3>
<p class="mt-10">${team[0].role}</p>
`

angelaElement.innerHTML = `
<img src="${team[1].image}" alt="${team[1].name}">
<h3 class="mt-20">${team[1].name}</h3>
<p class="mt-10">${team[1].role}</p>
`

walterElement.innerHTML = `
<img src="${team[2].image}" alt="${team[2].name}">
<h3 class="mt-20">${team[2].name}</h3>
<p class="mt-10">${team[2].role}</p>
`

lopezElement.innerHTML = `
<img src="${team[3].image}" alt="${team[3].name}">
<h3 class="mt-20">${team[3].name}</h3>
<p class="mt-10">${team[3].role}</p>
`

scottElement.innerHTML = `
<img src="${team[4].image}" alt="${team[4].name}">
<h3 class="mt-20">${team[4].name}</h3>
<p class="mt-10">${team[4].role}</p>
`

barbaraElement.innerHTML = `
<img src="${team[5].image}" alt="${team[5].name}">
<h3 class="mt-20">${team[5].name}</h3>
<p class="mt-10">${team[5].role}</p>
`











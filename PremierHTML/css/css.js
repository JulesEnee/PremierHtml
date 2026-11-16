function Toblerone() {
    alert("t ki ?");
}

// script.js

// On récupère les éléments
const colorPicker = document.getElementById("colorPicker");
const styleToggle = document.getElementById("styleToggle");
const boutonSuspect = document.getElementById("boutonSuspect");
const fontSizeSelect = document.getElementById("fontSizeSelect");
const rangeInput = document.getElementById("rangeInput");
const zoneTexte = document.getElementById("zoneTexte");

// Modifier la couleur du texte quand on change la couleur dans l'input color
colorPicker.addEventListener("input", () => {
  zoneTexte.style.color = colorPicker.value;
});

// Basculer un style spécial avec la checkbox
styleToggle.addEventListener("change", () => {
  if (styleToggle.checked) {
    zoneTexte.style.backgroundColor = "black";
    zoneTexte.style.color = "white";
  } else {
    zoneTexte.style.backgroundColor = "";
    zoneTexte.style.color = "";
  }
});

// Changer la taille du texte avec le select
fontSizeSelect.addEventListener("change", () => {
  zoneTexte.style.fontSize = fontSizeSelect.value;
});

// Changer la taille du texte avec la range
rangeInput.addEventListener("input", () => {
  zoneTexte.style.fontSize = rangeInput.value + "px";
});

// Exemple pour bouton suspect
boutonSuspect.addEventListener("click", () => {
  alert("Les pâtes, ces délicieuses préparations à base de farine et d'eau, parfois enrichies d'œufs, sont un pilier incontournable de la cuisine mondiale, appréciées pour leur diversité infinie de formes et de saveurs, allant des spaghetti longs et fins aux rigatoni tubulaires, en passant par les farfalle élégamment papillon, chacune pouvant être associée à une multitude de sauces allant de la classique bolognaise riche et savoureuse à la simple mais subtile sauce à l'huile d'olive et à l'ail. Les pâtes, par leur simplicité et leur versatilité, évoquent aussi bien les repas familiaux chaleureux que les festins gastronomiques, capables de rassembler autour d’une table des générations entières dans un moment de convivialité et de partage. Parallèlement, dans le monde mécanique, les voitures représentent la quintessence de la mobilité moderne, des bolides sportifs capables d’atteindre des vitesses vertigineuses aux véhicules électriques silencieux et écologiques qui symbolisent l’avenir durable de la mobilité. Chaque voiture incarne un mélange complexe d’ingénierie, de design et de technologie, alliant esthétique et fonctionnalité, que ce soit dans les lignes aérodynamiques d’une supercar italienne ou dans la robustesse rassurante d’un SUV familial. Elles sont à la fois un prolongement de la personnalité de leur conducteur et un outil indispensable pour parcourir les vastes distances du monde contemporain. Quant aux chats, ces créatures mystérieuses et indépendantes, ils occupent une place particulière dans le cœur des humains depuis des millénaires, fascinant par leur grâce féline, leur comportement souvent énigmatique et leur capacité à se glisser silencieusement dans nos vies et nos foyers. Ils peuvent être de doux compagnons câlins, ronronnant sur nos genoux, ou des chasseurs agiles et alertes, explorant chaque recoin avec curiosité et précision. La coexistence de ces trois univers, celui de la nourriture simple et réconfortante des pâtes, celui de la technologie et de la liberté symbolisées par les voitures, et celui de la douceur imprévisible des chats, peut sembler incongrue à première vue, mais elle illustre parfaitement la richesse et la diversité de nos expériences humaines, où le plaisir gustatif, la mobilité et la compagnie animale se mêlent pour enrichir notre quotidien sous des formes multiples et complémentaires, nous rappelant que la vie est un savant mélange d’éléments parfois inattendus qui, ensemble, créent un équilibre harmonieux et fascinant.");
});

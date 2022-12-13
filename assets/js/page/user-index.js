const totemsArr = [
  {
    totemId: 1,
    nombre: "Totem1",
    ubicacion: "ubicacion1",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "../assets/img/unsplash/login-bg.jpg",
    estado: true,
    media: [
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
    ],
  },
  {
    totemId: 2,
    nombre: "Totem2",
    ubicacion: "ubicacion2",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "../assets/img/unsplash/login-bg.jpg",
    estado: false,
    media: [
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
    ],
  },
  {
    totemId: 3,
    nombre: "Totem3",
    ubicacion: "ubicacion3",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "../assets/img/unsplash/login-bg.jpg",
    estado: true,
    media: [
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
      "../assets/img/p-50.png",
    ],
  },
];

const totemsContainer = document.getElementById("totems-container");
const totemRow = document.createElement("div");
totemRow.className = "row";
totemsContainer.appendChild(totemRow);

const totemCard = (totem) => {
  const divExt = document.createElement("div");
  divExt.className = "col-md-12 col-xl-6";
  totemRow.appendChild(divExt);
  const cardDiv = document.createElement("div");
  cardDiv.className = "card shadow-sm bg-light";
  divExt.appendChild(cardDiv);
  const inRow = document.createElement("div");
  inRow.className = "row g-0";
  cardDiv.appendChild(inRow);
  const inCol = document.createElement("div");
  inCol.className = "col-md-5 d-flex align-items-center";
  inRow.appendChild(inCol);
  const totemCardImage = document.createElement("img");
  totemCardImage.src = totem.img;
  totemCardImage.className = "d-block img-thumbnail mx-0";
  totemCardImage.alt = `usuario ${totem.nombre} imagen`;
  inCol.appendChild(totemCardImage);
  const intCol = document.createElement("div");
  intCol.className = "col-md-7";
  inRow.appendChild(intCol);
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  intCol.appendChild(cardBody);
  const cardTitle = document.createElement("h4");
  cardTitle.className = "card-title fw-bold mb-2";
  cardTitle.innerText = totem.nombre;
  cardBody.appendChild(cardTitle);
  const cardtotemInfo = document.createElement("p");
  cardtotemInfo.className = "card-text mb-4";
  cardtotemInfo.innerText = totem.descripcion;
  cardBody.appendChild(cardtotemInfo);
  const cardtotemUbi = document.createElement("p");
  cardtotemUbi.className = "card-text mb-4";
  cardtotemUbi.innerHTML = `<strong>Ubicación: </strong>${totem.ubicacion}`;
  cardBody.appendChild(cardtotemUbi);
  const totemEstado = document.createElement("p");
  if (totem.estado) {
    totemEstado.className = "text-success";
    totemEstado.innerText = "Activo";
  } else {
    totemEstado.className = "text-danger";
    totemEstado.innerText = "Inactivo";
  }
  cardBody.appendChild(totemEstado);
  const mediaGallery = document.createElement('div');
  mediaGallery.className = "bg-white rounded-1 d-flex flex-wrap justify-content-around";
  cardBody.appendChild(mediaGallery);
  totem.media.forEach((img) => {
    const totemImg = document.createElement("img");
    totemImg.className = "img-thumbnail my-2 m-2";
    totemImg.src = img
    totemImg.alt = `Totem ${totem.nombre}`;
    mediaGallery.appendChild(totemImg);
  });
};

totemsArr.forEach(totemCard);

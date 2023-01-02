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
      {
        mediaId: 1,
        mediaTitle: "Media1",
        mediaType: "Video",
        mediaDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        mediaUrl: "https://source.unsplash.com/random/200x200/?city",
        creado: "01/01/2020",
        vence: "01/01/2023",
        duracion: Math.floor((Math.random() * 60) + 12),
      },
      {
        mediaId: 2,
        mediaTitle: "Media2",
        mediaType: "Imagen",
        mediaDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        mediaUrl: "https://source.unsplash.com/random/200x200/?color",
        creado: "01/01/2020",
        vence: "01/01/2023",
        duracion: 20,
      },
      {
        mediaId: 3,
        mediaTitle: "Media3",
        mediaType: "Video",
        mediaDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        mediaUrl: "https://source.unsplash.com/random/200x200/?nature",
        creado: "01/01/2020",
        vence: "01/01/2023",
        duracion: Math.floor((Math.random() * 60) + 12),
      },
      {
        mediaId: 4,
        mediaTitle: "Media4",
        mediaType: "Imagen",
        mediaDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        mediaUrl: "https://source.unsplash.com/random/200x200/?life",
        creado: "01/01/2020",
        vence: "01/01/2023",
        duracion: 20,
      },
      {
        mediaId: 5,
        mediaTitle: "Media5",
        mediaType: "Video",
        mediaDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        mediaUrl: "https://source.unsplash.com/random/200x200/?beauty",
        creado: "01/01/2020",
        vence: "01/01/2023",
        duracion: Math.floor((Math.random() * 60) + 12),
      },
      {
        mediaId: 6,
        mediaTitle: "Media6",
        mediaType: "Imagen",
        mediaDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        mediaUrl: "https://source.unsplash.com/random/200x200/?office",
        creado: "01/01/2020",
        vence: "01/01/2023",
        duracion: 20,
      },
      {
        mediaId: 7,
        mediaTitle: "Media7",
        mediaType: "Video",
        mediaDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        mediaUrl: "https://source.unsplash.com/random/200x200/?pretty",
        creado: "01/01/2020",
        vence: "01/01/2023",
        duracion: Math.floor((Math.random() * 60) + 12),
      },
      {
        mediaId: 8,
        mediaTitle: "Media8",
        mediaType: "Imagen",
        mediaDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        mediaUrl: "https://source.unsplash.com/random/200x200/?beach",
        creado: "01/01/2020",
        vence: "01/01/2023",
        duracion: 20,
      },
    ],
  },
];

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

const totemsContainer = document.getElementById("totems-container");
const totemRow = document.createElement("div");
totemRow.className = "row";
totemsContainer.appendChild(totemRow);

const totemCard = (totem) => {
  const divExtL = document.createElement("div");
  divExtL.className = "col-md-12 col-xl-6";
  totemRow.appendChild(divExtL);
  const cardDivL = document.createElement("div");
  cardDivL.className = "card shadow-sm bg-light";
  divExtL.appendChild(cardDivL);
  const inRow = document.createElement("div");
  inRow.className = "row g-0";
  cardDivL.appendChild(inRow);
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
  cardTitle.className = "card-title fw-bold mb-2 text-primary";
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

  const divExtR = document.createElement("div");
  divExtR.className = "col-md-12 col-xl-6";
  totemRow.appendChild(divExtR);
  const cardDivR = document.createElement("div");
  cardDivR.className = "card shadow-sm bg-light h-100";
  divExtR.appendChild(cardDivR);
  const listCard = document.createElement("div");
  listCard.className = "card-body";
  cardDivR.appendChild(listCard);
  const listGroup = document.createElement("ul");
  listGroup.className = "list-group";
  listCard.appendChild(listGroup);
  totem.media.forEach((media) => {
    const totemImgItem = document.createElement("li");
    totemImgItem.className = "mt-1 list-group-item list-group-item-action align-items-center d-flex justify-content-between";
    listGroup.appendChild(totemImgItem);
    const imgId = document.createElement("h4");
    imgId.className = "my-auto mr-3 fw-bold";
    imgId.innerText = media.mediaId;
    totemImgItem.appendChild(imgId)
    const totemListImage = document.createElement("img");
    totemListImage.src = media.mediaUrl;
    totemListImage.className = "img-thumbnail float-start m-0 w-20 h-20";
    totemListImage.alt = media.mediaTitle;
    totemImgItem.appendChild(totemListImage);
    const totemImgItemCtn = document.createElement("div");
    totemImgItemCtn.className = "d-flex ml-2 w-100 flex-column justify-content-around";
    totemImgItem.appendChild(totemImgItemCtn);
    const imgItemTitle = document.createElement("h6");
    imgItemTitle.className = "fw-semibold text-primary m-0";
    if (media.mediaType == "Video") {
      imgItemTitle.innerHTML = `${media.mediaTitle} <span class="badge bg-orange bg-gradient rounded-pill">${media.mediaType}</span>`;
    } else {
      imgItemTitle.innerHTML = `${media.mediaTitle} <span class="badge bg-teal rounded-pill">${media.mediaType}</span>`;
    };
    totemImgItemCtn.appendChild(imgItemTitle);
    const imgItemUpdate = document.createElement("small");
    imgItemUpdate.className = "text-muted";
    imgItemUpdate.innerText = `Creado: ${media.creado} - Vence: ${media.vence}`
    totemImgItemCtn.appendChild(imgItemUpdate);
    const imgItemDesc = document.createElement("p");
    imgItemDesc.className = "mt-1";
    imgItemDesc.innerText = media.mediaDesc;
    totemImgItemCtn.appendChild(imgItemDesc);

    const minutes = Math.floor(media.duracion / 60);
    const seconds = media.duracion  % 60;
    const result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
    const imgItemDur = document.createElement("small");
    imgItemDur.className = "m-0";
    imgItemDur.innerText = `Duración: ${result}`;
    totemImgItemCtn.appendChild(imgItemDur);
    const dragItem = document.createElement("i");
    dragItem.className = "fa fa-reorder text-muted me-2";
    dragItem.ariaHidden = true;
    totemImgItem.appendChild(dragItem);
  });
};

totemsArr.forEach(totemCard);

const usersArr = [
  {
    id: 1,
    perfil_img: "https://images.unsplash.com/photo-1668414308071-93879c365942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    nombre: "Empresa 1",
    descripcion: "Empresa que arrienda varios totems para publicidad en sitios estrategicos",
    totems: [
      {
        totemId: 1,
        totem_nombre: "Sitio1",
        ubicacion: "ubicacion1",
        totem_img: "../assets/images/users/18.jpg",
        estado: true,
      },
      {
        totemId: 2,
        totem_nombre: "Sitio2",
        ubicacion: "ubicacion2",
        totem_img: "../assets/images/users/18.jpg",
        estado: false,
      },
      {
        totemId: 3,
        totem_nombre: "Sitio3",
        ubicacion: "ubicacion3",
        totem_img: "../assets/images/users/18.jpg",
        estado: true,
      },
    ]
  },
  {
    id: 2,
    perfil_img: "https://images.unsplash.com/photo-1668414308071-93879c365942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    nombre: "Empresa 2",
    descripcion: "Empresa que arrienda varios totems para publicidad en sitios estrategicos",
    totems: [
      {
        totemId: 4,
        totem_nombre: "Sitio4",
        ubicacion: "ubicacion4",
        totem_img: "../assets/images/users/18.jpg",
        estado: true,
      },
      {
        totemId: 5,
        totem_nombre: "Sitio5",
        ubicacion: "ubicacion5",
        totem_img: "../assets/images/users/18.jpg",
        estado: false,
      },
      {
        totemId: 6,
        totem_nombre: "Sitio6",
        ubicacion: "ubicacion6",
        totem_img: "../assets/images/users/18.jpg",
        estado: true,
      },
    ]
  },
  {
    id: 3,
    perfil_img: "https://images.unsplash.com/photo-1668414308071-93879c365942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    nombre: "Empresa 2",
    descripcion: "Empresa que arrienda varios totems para publicidad en sitios estrategicos",
    totems: [
      {
        totemId: 7,
        totem_nombre: "Sitio7",
        ubicacion: "ubicacion7",
        totem_img: "../assets/images/users/18.jpg",
        estado: true,
      },
      {
        totemId: 8,
        totem_nombre: "Sitio8",
        ubicacion: "ubicacion8",
        totem_img: "../assets/images/users/18.jpg",
        estado: false,
      },
      {
        totemId: 9,
        totem_nombre: "Sitio9",
        ubicacion: "ubicacion9",
        totem_img: "../assets/images/users/18.jpg",
        estado: true,
      },
    ]
  },
];

const usersContainer = document.getElementById('usuarios-container');
const userRow = document.createElement('div');
userRow.className = 'row';
usersContainer.appendChild(userRow);

const userCard = (user) => {
  const divExt = document.createElement('div');
  divExt.className = 'col-md-12 col-xl-6';
  userRow.appendChild(divExt);
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card shadow-sm bg-light';
  divExt.appendChild(cardDiv);
  const inRow = document.createElement('div');
  inRow.className = 'row g-0';
  cardDiv.appendChild(inRow);
  const inCol = document.createElement('div');
  inCol.className = 'col-md-4';
  inRow.appendChild(inCol);
  const userCardImage = document.createElement('img');
  userCardImage.src = user.perfil_img;
  userCardImage.className = 'img-thumbnail float-start';
  userCardImage.alt = `usuario ${user.nombre} imagen`
  inCol.appendChild(userCardImage);
  const intCol = document.createElement('div');
  intCol.className = 'col-md-8';
  inRow.appendChild(intCol);
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  intCol.appendChild(cardBody);
  const cardTitle = document.createElement('h4');
  cardTitle.className = 'card-title fw-bold mb-2';
  cardTitle.innerText = user.nombre;
  cardBody.appendChild(cardTitle);
  const cardUserInfo = document.createElement('p');
  cardUserInfo.className = 'card-text mb-4';
  cardUserInfo.innerText = user.descripcion;
  cardBody.appendChild(cardUserInfo);
  const visitorList = document.createElement('div');
  visitorList.className = 'visitor-list';
  cardBody.appendChild(visitorList);
  user.totems.forEach((totem) => {
    const totemMedia = document.createElement('div');
    totemMedia.className = 'media mt-2 bg-white rounded-1 p-2';
    visitorList.appendChild(totemMedia);
    const totemImg = document.createElement('img');
    totemImg.className = 'avatar rounded-1 avatar-md my-auto mx-3';
    totemImg.src = totem.totem_img;
    totemImg.alt = `Totem ${totem.totem_nombre}`
    totemMedia.appendChild(totemImg);
    const totemMediaBody = document.createElement('div');
    totemMediaBody.className = 'media-body mx-3';
    totemMedia.appendChild(totemMediaBody);
    const totemName = document.createElement('a');
    totemName.className = 'text-default fw-semibold';
    totemName.href = '#';
    totemName.innerText = totem.totem_nombre;
    totemMediaBody.appendChild(totemName);
    const totemUbi = document.createElement('p');
    totemUbi.className = 'text-muted mb-0 pb-0';
    totemUbi.innerText = totem.ubicacion;
    totemMediaBody.appendChild(totemUbi);
    const totemEstado = document.createElement('p');
    if (totem.estado) {
      totemEstado.className = 'text-success';
      totemEstado.innerText = 'Activo';
    } else {
      totemEstado.className = 'text-danger';
      totemEstado.innerText = 'Inactivo';
    };
    totemMediaBody.appendChild(totemEstado);
  })
};

usersArr.forEach(userCard);

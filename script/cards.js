console.log('Cards cargado correctamente');

const dataCards = [{
  "title": "Viaja con tu familia",
  "url_image": "https://img.freepik.com/foto-gratis/retrato-familia-sonriente-playa_74855-20347.jpg?semt=ais_hybrid&w=740&q=80",
  "desc": "Viajar en familia es una experiencia que combina diversión y unión. Permite compartir momentos especiales, descubrir nuevos lugares juntos",
  "cta": "Mostrar más",
  "link": "https://es.visitcostarica.com/"
},
{
  "title": "Viajes en oferta",
  "url_image": "https://www.westgatereservations.com/app/uploads/2025/10/10-Ofertas-de-viaje-EXCLUSIVAS-del-Black-Friday-2025.jpg",
  "desc": "viajes a excelentes precios por solo el 25% del precio original!!!",
  "cta": "Mostrar más",
  "link": "https://www.ofertasb.com/productos_cat.asp"
},
{
  "title": "Aerolineas Disponibles",
  "url_image": "https://img.magnific.com/foto-gratis/lugar-volando-cielo-al-atardecer_1112-1132.jpg?semt=ais_hybrid&w=740&q=80",
  "desc": "Tenemos multiples aerolineas disponibles para que viajes con seguridad y comodidad siempre..",
  "cta": "Mostrar más",
  "link": "https://www.latimes.com/espanol/eeuu/articulo/2026-03-22/un-vuelo-de-air-canada-choca-con-un-vehiculo-en-la-pista-del-aeropuerto-laguardia-de-nueva-york"
},
{
  "title": "Viajes con mascotas",
  "url_image": "https://blog.guaw.com/wp-content/uploads/2019/06/Viajar-con-mi-gato-Guia-completa-para-viajes-en-avion-barco-y-coche-3.png",
  "desc": "No olvides a tu fiel amigo, ellos tambien pueden viajar contigo, consulta nuestras opciones para viajar con mascotas",
  "cta": "Mostrar más",
  "link": "https://jefferspet.com/es/blogs/pet/reasons-why-cats-are-the-ultimate-companions?srsltid=AfmBOooxr4yO3XJbUOdZK0l9_60elP1J6ZNE9Xq__7ezHGMm5TSJ55aR"
},
{
  "title": "Beneficios de ser un viajero frecuente",
  "url_image": "https://gentleman.com.mx/wp-content/uploads/2019/09/ok.negocios.jpg",
  "desc": "usted puede acumular millas o puntos por cada vuelo que realice, los cuales pueden canjearse por descuentos en futuros vuelos",
  "cta": "Mostrar más",
  "link": "https://agendapro.com/blog/quejas-de-clientes/"
},
{
  "title": "Paquete de tours",
  "url_image": "https://toursfestival.com/images/img-producto/galeria-singapur-default-3.jpg?41",
  "desc": "Con esta opcion usted puede tener un listado de lugares para visitar con nuestra atenta guia y cuidado.",
  "cta": "Mostrar más",
  "link": "https://migracion.go.cr/"
}
];

(function () {
  let CARD = {
    init: function () {
      //console.log('card module was loaded');
      let _self = this;

      //llamanos las funciones
      this.insertData(_self);
      //this.eventHandler(_self);
    },

    eventHandler: function (_self) {
      let arrayRefs = document.querySelectorAll('.accordion-title');

      for (let x = 0; x < arrayRefs.length; x++) {
        arrayRefs[x].addEventListener('click', function (event) {
          console.log('event', event);
          _self.showTab(event.target);
        });
      }
    },

    insertData: function (_self) {
      dataCards.map(function (item, index) {
        document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
      });
    },

    tplCardItem: function (item, index) {
      return (`<div class='card-item' id="card-number-${index}">
            <img src="${item.url_image}"/>
            <div class="card-info">
              <p class='card-title'>${item.title}</p>
              <p class='card-desc'>${item.desc}</p>
              <div class="boton-cta">
              <a class='card-cta' target="blank" href="${item.link}">${item.cta}</a>
              </div>
            </div>
          </div>`)
    },
  }

  CARD.init();
})();
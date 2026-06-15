console.log('Cargando Accordion...');
const dataAccordion = [{
  "title": "¿Qué incluyen los paquetes turísticos?",
  "desc": "Los paquetes pueden incluir alojamiento, transporte, tours guiados y otros beneficios. Los detalles específicos se muestran en la descripción de cada paquete."
},
{
  "title":"¿Puedo cancelar o modificar mi reserva?",
  "desc": "Sí, las reservas pueden modificarse o cancelarse de acuerdo con las políticas aplicables a cada paquete o servicio contratado. Te recomendamos revisar las condiciones antes de confirmar tu compra."
},
{
  "title": "¿Qué métodos de pago aceptan?",
  "desc": "Aceptamos tarjetas de crédito y débito, transferencias bancarias y otros métodos de pago electrónicos disponibles en tu región."
},
{
  "title":  "¿Qué incluyen los paquetes turísticos?",
  "desc": "Los paquetes pueden incluir alojamiento, transporte, tours guiados y otros beneficios. Los detalles específicos se muestran en la descripción de cada paquete."
}];


(function () {
    let ACCORDION = {
      init: function () {
        let _self = this;
        //llamanos las funciones
        this.insertData(_self);
        this.eventHandler(_self);
      },
  
      eventHandler: function (_self) {
        let arrayRefs = document.querySelectorAll('.accordion-title');
  
        for (let x = 0; x < arrayRefs.length; x++) {
          arrayRefs[x].addEventListener('click', function(event){
            console.log('event', event);
            _self.showTab(event.target);
          });
        }
      },

      showTab: function(refItem){
        let activeTab = document.querySelector('.tab-active');
  
        if(activeTab){
          activeTab.classList.remove('tab-active');
        }
  
        console.log('show tab', refItem);
        refItem.parentElement.classList.toggle('tab-active');
      },
  
      insertData: function (_self) {
        dataAccordion.map(function (item, index) {
          document.querySelector('.main-accordion-container').insertAdjacentHTML('beforeend', _self.tplAccordionItem(item));
        });
      },

      tplAccordionItem: function (item) {
        return(`<div class='accordion-item'>
        <p class='accordion-title'>${item.title}</p>
        <p class='accordion-desc'>${item.desc}</p>
      </div>`)},
    }
  
    ACCORDION.init();
  })();

var markers = {
  "101": { "name": "Torre de Enfermería", lat: 4.635191292666177, lng: -74.08234824713026 },
  "102": { "name": "Biblioteca Central Gabriel García Márquez", lat: 4.635276842634366, lng: -74.08323337610517 },
  "103": { "name": "Polideportivo", lat: 4.634525510338722, lng: -74.08277720737362 },
  "104": { "name": "Auditorio León de Greiff", lat: 4.6357178632099725, lng: -74.08229977416897 },
  "201": { "name": "Facultad de Derecho, Ciencias Políticas y Sociales", lat: 4.63543447907754, lng: -74.08384661823436 },
  "205": { "name": "Edificio Orlando Fals Borda: Departamento de Sociología", lat: 4.634428088024707, lng: -74.08388416916057 },
  "207": { "name": "Museo de Arquitectura Leopoldo Rother", lat: 4.633974004231836, lng: -74.08318719720967 },
  "210": { "name": "Facultad de Odontología", lat: 4.634491757898525, lng: -74.08525751824146 },
  "212": { "name": "Aulas de Ciencias Humanas", lat: 4.6340479668330925, lng: -74.08466206784016 },
  "214": { "name": "Edificio Antonio Nariño - Departamento de Lingüística. Departamento de Ingeniería Civil y Agrícola", lat: 4.633545432390012, lng: -74.08398598257736 },
  "217": { "name": "Edificio Francisco de Paula Santander: Diseño Gráfico", lat: 4.633251353610619, lng: -74.08318131987289 },
  "224": { "name": "Edificio Manuel Ancízar", lat: 4.633616675844476, lng: -74.08551551465587 },
  "225": { "name": "Edificio Rogelio Salmona de Postgrados en Ciencias Humanas", lat: 4.634041902141579, lng: -74.08656825465636 },
  "228": { "name": "Edificio de Enfermería Nuevo", lat: 4.635341441280287, lng: -74.0848413342963 },
  "230": { "name": "Banco Popular", lat: 4.632892175185183, lng: -74.08472285219807 },
  "231": { "name": "Departamento de Lenguas Extranjeras", lat: 4.636351232404465, lng: -74.08184127281243 },
  "238": { "name": "Postgrados de Ciencias Económicas", lat: 4.632670116521824, lng: -74.08322706968227 },
  "239": { "name": "Filosofía", lat: 4.632392078062056, lng: -74.08330217153468 },
  "251": { "name": "Capilla", lat: 4.632879762717396, lng: -74.08144171905923 },
  "301": { "name": "Escuela de Artes Plásticas", lat: 4.6362887218881, lng: -74.08226516164257 },
  "303": { "name": "Escuela de Arquitectura (cerrado desde 2012, demolición programada para diciembre de 2014)2​3​", lat: 4.636759245854168, lng: -74.08167035825409 },
  "305": { "name": "Conservatorio de Música", lat: 4.635565791124059, lng: -74.08118169895306 },
  "309": { "name": "Talleres y Aulas de Construcción", lat: 4.636020643978284, lng: -74.08053172644605 },
  "310": { "name": "Facultad de Ciencias Económicas", lat: 4.637147115780747, lng: -74.08075338946799 },
  "314": { "name": "Postgrados en Arquitectura - SINDU", lat: 4.635627172693741, lng: -74.08059336231156 },
  "317": { "name": "Museo de Arte", lat: 4.634529953453514, lng: -74.08084327047078 },
  "401": { "name": "Facultad de Ingeniería", lat: 4.637258414427244, lng: -74.08283150571015 },
  "404": { "name": "Departamentos de Matemáticas, Física y Estadística", lat: 4.637778591688736, lng: -74.08238642932952 },
  "405": { "name": "Postgrados en Matemáticas y Física", lat: 4.637773244834954, lng: -74.0816997838217 },
  "406": { "name": "Instituto de Extensión e Investigación", lat: 4.6384306863914775, lng: -74.0825685976618 },
  "407": { "name": "Postgrados en Materiales y Procesos de Manufactura", lat: 4.636351232404465, lng: -74.08184127281243 },
  "408": { "name": "Laboratorio de Ensayos Hidráulicos", lat: 4.639061614270086, lng: -74.08210344642436 },
  "409": { "name": "Laboratorio de Hidráulica", lat: 4.63865525400611, lng: -74.08187277644907 },
  "411": { "name": "Laboratorios de Ingeniería", lat: 4.639216672730223, lng: -74.08270962566172 },
  "412": { "name": "Laboratorio de Ingeniería Química", lat: 4.6387536537181155, lng: -74.08315093168585 },
  "413": { "name": "Observatorio Astronómico", lat: 4.639733219797312, lng: -74.08333547586068 },
  "421": { "name": "Departamento de Biología", lat: 4.641111964781577, lng: -74.08169776777868 },
  "425": { "name": "Instituto de Ciencias Naturales", lat: 4.6423738151819895, lng: -74.08174068312292 },
  "426": { "name": "Instituto de Genética", lat: 4.642983352279005, lng: -74.08292085508947 },
  "431": { "name": "Instituto Pedagógico Arturo Ramírez Montúfar: IPARM", lat: 4.64157007847832, lng: -74.08293201368633 },
  "433": { "name": "Almacén e Imprenta", lat: 4.640848256728799, lng: -74.08355428617779 },
  "435": { "name": "Talleres de Mantenimiento", lat: 4.641495222923792, lng: -74.0836293880302 },
  "436": { "name": "Parque Automotor", lat: 4.64176002223488, lng: -74.0834309045631 },
  "437": { "name": "Centro de Acopio de Residuos Sólidos", lat: 4.64136435717749, lng: -74.08403708380047 },
  "438": { "name": "Talleres y Gestiones de Mantenimiento", lat: 4.642048750650253, lng: -74.08351673525158 },
  "450": { "name": "Departamento de Farmacia", lat: 4.637201904360323, lng: -74.08367238371784 },
  "451": { "name": "Departamento de Química", lat: 4.637389044369728, lng: -74.08426246970112 },
  "453": { "name": "Aulas de Ingeniería", lat: 4.638530189056591, lng: -74.08362492323249 },
  "454": { "name": "Ciencia y Tecnología (CyT)", lat: 4.637997196271976, lng: -74.08476951312355 },
  "471": { "name": "Facultad de Medicina", lat: 4.636313528398595, lng: -74.0843009828759 },
  "476": { "name": "Facultad de Ciencias", lat: 4.637292003987368, lng: -74.08550126407744 },
  "477": { "name": "Aulas de Informática", lat: 4.636848214680631, lng: -74.08531887386442 },
  "481": { "name": "Facultad de Medicina Veterinaria y Zootecnia", lat: 4.636082935517357, lng: -74.08530020756893 },
  "500": { "name": "Facultad de Ciencias Agrarias", lat: 4.635957720903808, lng: -74.08722034697183 },
  "501": { "name": "Cirugía y Clínica de Grandes Animales", lat: 4.63615965984797, lng: -74.08585777028804 },
  "502": { "name": "Aula y Laboratorios de Histopatología e Inseminación", lat: 4.635678441743373, lng: -74.08570220216518 },
  "503": { "name": "Auditorios, Anfiteatros y Microbiología", lat: 4.635010082721106, lng: -74.08558418496852 },
  "510": { "name": "Farmacia y Oficinas", lat: 4.635833500946208, lng: -74.08623327955013 },
  "561": { "name": "Posgrados de Veterinaria", lat: 4.637441302981764, lng: -74.08740735278997 },
  "571": { "name": "Hemeroteca Nacional", lat: 4.636640915158021, lng: -74.0911218672905 },
  "608": { "name": "Unidad de Servicios de Computación y SIA", lat: 4.6365725269477975, lng: -74.07983832937327 },
  "614": { "name": "Central Telefónica", lat: 4.639493375838726, lng: -74.08181642019395 },
  "615": { "name": "Laboratorio de Química e Ingeominas", lat: 4.6394185200639635, lng: -74.08101712190751 },
  "701": { "name": "Departamento de Cine y Televisión", lat: 4.640512491506769, lng: -74.0855312107434 },
  "731": { "name": "Estadio de fútbol Alfonso López Pumarejo", lat: 4.640353581414187, lng: -74.08644254020624 },
  "761": { "name": "Concha Acústica", lat: 4.638872068895913, lng: -74.08721422427698},
  "861": { "name": "Edificio Uriel Gutiérrez", lat: 4.639671053764288, lng: -74.09018518170615 }
};

function initMap() {

  var uluru = {
    lat: 4.636351232404465,
    lng: -74.08184127281243
  };

  var myStyles =[
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru,
    styles: myStyles
  });
  map.addListener('click', function(event) {
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
  });

  for(var key in markers) {
    //console.log(key, markers[key]);
    var marker = new google.maps.Marker({
      key: key,
      position: {
        lat: markers[key].lat,
        lng: markers[key].lng
      },
      label: key,
      icon: "https://lh3.googleusercontent.com/-aChpjxGYVEo/U3N2rjVJ_8I/AAAAAAAABMw/tL6vlWAxddg/w40-h73-n/14%2B-%2B1",
      map: map
    });
    (function (marker){
      google.maps.event.addListener(marker, 'click', function(e) {
        //console.log(marker);
        document.getElementById("myModal").className = "my-modal";
        document.getElementById("close").className = "modal-close";

        $('#myModal').append('');
        $('#myModal').append('<p class="title-modal">' + markers[key].name + '</p>');
      });
    })(marker);
  }


  $('#close').click(function(){
    document.getElementById("myModal").className = "";
    document.getElementById("close").className = "";
  });
}

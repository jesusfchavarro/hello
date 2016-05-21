var mapDirection = "http://jesusfchavarro.github.io/hello/Colombia.geo.json";

var width = 500,
    height = 500,
    centered,
    max;
// defina una escala de colores del 1 al 20
var color = d3.scale.linear()
  .domain([1, 20])
  .clamp(true)
  .range(['#00ffff', '#000d1a']);

var projection = d3.geo.mercator()
  .scale(1500)//define la escala
  .center([-74, 4.5])  // centra el mapa
  .translate([width / 2, height / 2]);

var path = d3.geo.path()
  .projection(projection); //convierte un dibujo Geo.JSON a SVG
// asigna a la etica svg las propiedades width y heigh a 500
var svg = d3.select('svg')
  .attr('width', 500)
  .attr('height', 500);
// añade un background a la imagen svg
svg.append('rect')
  .attr('class', 'background')
  .attr('width', width)
  .attr('height', height)
  .style({"fill" : "#D0D0D0"})
  .on('click', clicked);
//agrega una etiqueta g al svg
// una etiqueta g en SVG define un grupo
//mas informacion https://developer.mozilla.org/en/docs/Web/SVG/Element/g
var g = svg.append('g');

//agrega una etiqueta g con una clase de effect-layer
var effectLayer = g.append('g')
  .classed('effect-layer', true);

//agrega una etiqueta g con una clase de map-layer
var mapLayer = g.append('g')
  .classed('map-layer', true);

//agrega una etiqueta g big-text, atributo de X en 20 y Y en 45
var bigText = g.append('text')
  .classed('big-text', true)
  .attr('x', 20)
  .attr('y', 45);
// carga la informacion del mapa
// la funcion se pasa con un argumento de error por si algo sale mal al cargar el geo.JSON y con las mapData para pasar la informacion del mapa
d3.json(mapDirection, function(error, mapData) {
  var features = mapData.features;
  max = d3.max(features, area);//retorna el valor maximo del array de feactures que saca del archivo JSON
  color.domain([0, max]);// actualiza la escala del mapa de 0 hasta max
  //dibuja cada departamento como un path en SVG
  mapLayer.selectAll('path')
      .data(features)
    .enter().append('path')
      .attr('d', path)
      .attr('vector-effect', 'non-scaling-stroke')
      //{ fill: function(d){return centered && d===centered ? '#D5708B' : fillFn(d);}, opacity: function(d){return (centered == null ? "1" : "0") + (d==centered ? "1" : "0.5");} }
      .style({'fill': fillFn, opacity: function(d){return descubierto(d) ? 1 : 0}})
      .on('mouseover', mouseover)//agrega la funcion mouseover con el evento 'mouseover'
      .on('mouseout', mouseout)//agrega la funcion mouseout con el evento 'mouseout'
      .on('click', clicked);////agrega la funcion clicked con el evento 'click'
});

// Obtiene el nombre de un departamento d
function nameFn(d){
  return d && d.properties ? d.properties.NOMBRE_DPT : null;
}
// Obtiene el area de el departamento d
function area(d){
  var n = d && d.properties ? d.properties.AREA : null;;
  return n ? n : 0;
}
// obtiene el color del departemento
function fillFn(d){
  return color(area(d));
}

//revisa si esta en el array de departamentos descubiertos
function descubierto(d){
  return DepartamentosDescubiertos && (DepartamentosDescubiertos.indexOf(nameFn(d)) > -1);
}
// cuando se clickea, se hace zoom
function clicked(d) {
  if(descubierto(d)){
    var x, y, k;
    if (d && centered !== d) {//si existe d y no esta centrada
      var centroid = path.centroid(d);
      x = centroid[0];
      y = centroid[1];//se centra
      k = 4;//se asigna 4 a k, esta variable se usa para hace la escala o el zoom
      centered = d;//se le asigna d a centered
    } else {
      x = width / 2;
      y = height / 2;//se centra de nuevo todo colombia
      k = 1;//se vuelve a la escala 1
      centered = null;// se asigna null a centered
    }
    // se le asigna un color diferente al departamento clickeado
    //y a todos los demas departamentos se les asigna una opacity de 0.5
    mapLayer.selectAll('path')
      .style({ fill: function(d){return descubierto(d) && centered && d===centered ? '#ff4d11' : fillFn(d);}});
    // Zoom
    g.transition()
      .duration(750)// lo que dura la animacion o transicion del zoom
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')');//se le asignan las variables para centrar el departemento y escalar todo el mapa
  }
}
//funcion que se acciona cuando el puntero esta sobre un departamento
function mouseover(d){
  if(descubierto(d)){
    // cambia el color del departamento
    d3.select(this).style({fill:'#e65c00', opacity: function(d){return descubierto(d) ? 1 : 0}});
    //se le asigna el contenido y la fuente lora al texto mostrado en el mapa
    bigText
      .style('font-family', "Lora")
      .text(nameFn(d));
  }
}
//funcion que se acciona cuando el puntero deja de estar sobre un departamento
function mouseout(d){
  if(descubierto(d)){
    // se le asigna el color normal al departamento
    mapLayer.selectAll('path')
      .style({fill : function(d){return (descubierto(d) && centered && d===centered) ? '#D5708B' : fillFn(d);}, opacity: function(d){return descubierto(d) ? 1 : 0;}});
    // limpia el texto
    bigText.text('');
    }
}

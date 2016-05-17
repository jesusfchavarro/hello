var mapDirection = "http://jesusfchavarro.github.io/hello/Colombia.geo.json";

var width = 500,
    height = 500,
    centered,
    max;
// Define color scale
var color = d3.scale.linear()
  .domain([1, 20])
  .clamp(true)
  .range(['#FFF', '#D00']);
var projection = d3.geo.mercator()
  .scale(1500)
  // Center the Map in Colombia
  .center([-74, 4.5])
  .translate([width / 2, height / 2]);
var path = d3.geo.path()
  .projection(projection);
// Set svg width & height
var svg = d3.select('svg')
  .attr('width', width)
  .attr('height', height);
// Add background
svg.append('rect')
  .attr('class', 'background')
  .attr('width', width)
  .attr('height', height)
  .on('click', clicked);
var g = svg.append('g');
var effectLayer = g.append('g')
  .classed('effect-layer', true);
var mapLayer = g.append('g')
  .classed('map-layer', true);
var dummyText = g.append('text')
  .classed('dummy-text', true)
  .attr('x', 10)
  .attr('y', 30)
  .style('opacity', 0);
var bigText = g.append('text')
  .classed('big-text', true)
  .attr('x', 20)
  .attr('y', 45);
// Load map data
d3.json(mapDirection, function(error, mapData) {
  var features = mapData.features;
  // Update color scale domain d on data
  max = d3.max(features, nameLength);
  color.domain([0, max]);
  // Draw each province as a path
  mapLayer.selectAll('path')
      .data(features)
    .enter().append('path')
      .attr('d', path)
      .attr('vector-effect', 'non-scaling-stroke')
      .style('fill', fillFn)
      .on('mouseover', mouseover)
      .on('mouseout', mouseout)
      .on('click', clicked);
});

function desaparecer(d) {
  mapLayer.selectAll('path')
    .style('opacity', function(d){return nameFn(d) == "CUNDINAMARCA" ? "0" : "1"});
}

// Get province name
function nameFn(d){
  return d && d.properties ? d.properties.AREA : null;
}
// Get province name length
function nameLength(d){
  var n = nameFn(d);
  return n ? n : 0;
}
// Get province color
function fillFn(d){
  return color(nameLength(d));
}
// When clicked, zoom in
function clicked(d) {
  var x, y, k;
  // Compute centroid of the selected path
  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 4;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }
  // Highlight the clicked province
  mapLayer.selectAll('path')
    .style({ fill: function(d){return centered && d===centered ? '#D5708B' : fillFn(d);}, opacity: function(d){return (centered == null ? "1" : "0") + (d==centered ? "1" : "0.5");} });
  // Zoom
  g.transition()
    .duration(750)
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')');
}

 var fontFamily = "Lora";
function mouseover(d){
  // Highlight hovered province
  //d3.select(this).style('fill', 'orange');
  d3.select(this).style({fill:'orange'});
  bigText
    .style('font-family', fontFamily)
    .text(nameFn(d));

}
function mouseout(d){
  // Reset province color
  mapLayer.selectAll('path')
    .style('fill', function(d){return centered && d===centered ? '#D5708B' : fillFn(d);});
  // Clear province name
  bigText.text('');

}

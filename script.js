var myCarousel = document.querySelector("#carousel");
var carousel = new bootstrap.Carousel(myCarousel);

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxlam8tbGFnb3MxIiwiYSI6ImNreTM0YnNneDByZGQydm9kY2Y3NG82aGIifQ.jSY3a5-GyJ2dePIE7b9iAg";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [-118.2, 34.06], // starting position [lng, lat]
  zoom: 13, // starting zoom
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

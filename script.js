mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpZmEzMyIsImEiOiJjbTFienRma3AwZ3MyMmtzNmNya25scW9pIn0.ljsIhCngYnGHG7rua8Ah_g';


const map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: [77.2090, 28.6139], 
    zoom: 10 
});


const marker = new mapboxgl.Marker()
    .setLngLat([77.2090, 28.6139]) 
    .addTo(map);


map.addControl(new mapboxgl.NavigationControl());
const params = new URLSearchParams(window.location.search)
const rideID = params.get("id")
const ride = getRideRecord(rideID)


document.addEventListener("DOMContentLoaded", async () => {

    const firstPosition = ride.data[0];
    const lastPosition = ride.data[ride.data.length - 1];
    console.log(lastPosition);
    const firstLocationData = await getLocationData(firstPosition.latitude, firstPosition.longitude)

    const dataElement = document.createElement("div")
    dataElement.className = "flex-fill d-flex flex-column"

    const cityDiv = document.createElement("div")
    cityDiv.innerText = `${firstLocationData.city} - ${firstLocationData.countryCode}`
    cityDiv.className = "text-primary mb-2"


    const maxSpeedDiv = document.createElement("div")
    maxSpeedDiv.innerText = `Max speed: ${getMaxSpeed(ride.data)} Km/h`
    maxSpeedDiv.className = "h5"

    const distanceDiv = document.createElement("div")
    distanceDiv.innerText = `Distance: ${getDistance(ride.data)} Km`

    const durationDiv = document.createElement("div")
    durationDiv.innerText = `Duration: ${getDuration(ride)}`

    const dateDiv = document.createElement("div")
    dateDiv.innerText = getStartDate(ride)
    dateDiv.className = "text-secondary mt-2"

    dataElement.appendChild(cityDiv)
    dataElement.appendChild(maxSpeedDiv)
    dataElement.appendChild(distanceDiv)
    dataElement.appendChild(durationDiv)
    dataElement.appendChild(dateDiv)

    document.querySelector("#data").appendChild(dataElement)

    const deleteButton = document.querySelector("#deleteBtn")
    deleteButton.addEventListener("click", () => {

        deleteRide(rideID)
        window.location.href = "./"

    })


    const map = L.map("mapDetail")
    map.setView([firstPosition.latitude, firstPosition.longitude], 13)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 5,
        maxZoom: 20,
    }).addTo(map);

    const positionsArray = ride.data.map((position => {
        return [position.latitude, position.longitude]
    }))

    const polyline = L.polyline(positionsArray, { color: "#F00" })
    polyline.addTo(map)

    map.fitBounds(polyline.getBounds())
    L.marker([firstPosition.latitude, firstPosition.longitude]).addTo(map);
    // L.marker([lastPosition.latitude, lastPosition.longitude]).addTo(map);

    var greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      
      L.marker([lastPosition.latitude, lastPosition.longitude], {icon: greenIcon}).addTo(map);

})
const speedElement = document.querySelector("#speed");
const startbtn  = document.querySelector("#start");
const stopbtn  = document.querySelector("#stop");

let watchId = null;
let currentRide = null;

startbtn.addEventListener("click", () => {

    if(watchId)
        return;

    function handleSuccess(position){
        speedElement.innerText = 
            position.coords.speed ?  (position.coords.speed * 3.6).toFixed(1) : 0;
    }

    function handleError(error){
        console.log(error.msg);
    }

    const options = { enableHighAccuracy: true }
    currentRide = createNewRide();
    watchId = navigator.geolocation.watchPosition( handleSuccess, handleError, options);
    
    startbtn.classList.add("d-none");
    stopbtn.classList.remove("d-none");
});

stopbtn.addEventListener("click", () => {

    if(!watchId)
        return;

    navigator.geolocation.clearWatch(watchId);
    watchId = null;
    updateStopTime(currentRide);
    currentRide = null;

    stopbtn.classList.add("d-none");
    startbtn.classList.remove("d-none");
});
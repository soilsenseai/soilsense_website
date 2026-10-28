const camera = document.getElementById("camera");
const showBtn = document.getElementById("show-camera");

async function showCamera() {
     navigator.mediaDevices.getUserMedia({video: true})
    .then(stream => {
        camera.srcObject = stream;
    })
    .catch(error => {
        console.error("error accessing the camera", error);
    })
}

showBtn.addEventListener("click",() => showCamera());
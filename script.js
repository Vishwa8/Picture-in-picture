const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => videoElement.play();
    } catch (error) {

    }
}

button.addEventListener('click', async () => {
    button.disabled = true;

    await videoElement.requestPictureInPicture();

    button.disabled = false;
})

selectMediaStream();
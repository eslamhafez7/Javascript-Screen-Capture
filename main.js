let container = document.getElementById("container");
let captureButton = document.getElementById("capture-button");
let previewContainer = document.getElementById("perview-container");
let downloadButton = document.getElementById("download-btn");

captureButton.addEventListener("click", async () => {
    downloadButton.classList.remove("hidden");
    const canvas = await html2canvas(container);
    const imgURL = canvas.toDataURL();
    previewContainer.innerHTML = `<img src = "${imgURL}" id = "image">`;
    downloadButton.href = imgURL;
    downloadButton.download = "image.png";
});
window.onload = () => {
    downloadButton.classList.add("hidden");
    previewContainer.innerHTML = "";
}
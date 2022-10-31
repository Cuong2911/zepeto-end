

const bgHomeImage = $(".bg-image");
const homeContentText = $(".main-home .content-title");
const homeContentLink = $(".main-home .btn-link");

const handleBgHome = () => {
    bgHomeImage.classList.add("hidden");
    homeContentText.classList.add("color-white");
    homeContentLink.classList.add("btn-bg-white");
}


const images = [
    {
        src: "assets/Arts/art2.jpg",
        caption: "Unique-corn"
    },
    {
        src: "assets/Arts/art3.jpg",
        caption: "Camper Cuties"
    },
    {
        src: "assets/Arts/art4.jpg",
        caption: "Cloudy Beach"
    },
    {
        src: "assets/Arts/art5.jpg",
        caption: "Starry Night Walk"
    },
    {
        src: "assets/Arts/art6.jpg",
        caption: "Jungle Safari"
    },
    {
        src: "assets/Arts/art7.jpg",
        caption: "Abstract Wallpapers"
    },
    {
        src: "assets/Arts/art8.jpg",
        caption: "Other Worldly Landscape"
    },
    
];

let currentIndex = 0;

const galleryImage = document.getElementById("galleryImage");
const caption = document.getElementById("caption");
const thumbnailsContainer = document.getElementById("thumbnails");

const updateGallery = () => {
    galleryImage.src = images[currentIndex].src;
    caption.textContent = images[currentIndex].caption;
};

// Render Thumbnails
images.forEach((img, index) => {
    const thumb = document.createElement("img");
    thumb.src = img.src;
    thumb.alt = img.caption;
    thumb.className = "h-24 w-32 object-cover rounded-lg cursor-pointer transition-transform hover:scale-105 border-2 border-transparent";
    thumb.addEventListener("click", () => {
        currentIndex = index;
        updateGallery();
        highlightThumbnail();
    });
    thumbnailsContainer.appendChild(thumb);
});

const highlightThumbnail = () => {
    const thumbs = thumbnailsContainer.querySelectorAll("img");
    thumbs.forEach((thumb, i) => {
        thumb.classList.toggle("border-indigo-500", i === currentIndex);
    });
};

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
    highlightThumbnail();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
    highlightThumbnail();
});

// Load initial
updateGallery();
highlightThumbnail();
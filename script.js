const images = [
    {
        src: "images/aash-in-bus.jpg",
        text: "1/80 S | ISO 80 | 30.5mm | -0.7ev | F5.0 | Flash used",
        alt: "Aash in the bus"
    },
    {
        src: "images/aash-in-kitchen.jpg",
        text: "",
        alt: "Aash in the kitchen"
    },
    {
        src: "images/backyard.jpg",
        text: "",
        alt: "Backyard view"
    },
    {
        src: "images/batman.jpg",
        text: "",
        alt: "Batman statue"
    },
    {
        src: "images/brat.jpg",
        text: "",
        alt: "Brat moment"
    },
    {
        src: "images/ca-aashy.jpg",
        text: "",
        alt: "CA Aashy"
    },
    {
        src: "images/cloud.jpg",
        text: "",
        alt: "Cloudy sky"
    },
    {
        src: "images/emily-in-store.jpg",
        text: "",
        alt: "Emily in a store"
    },
    {
        src: "images/gallery.jpg",
        text: "",
        alt: "Art gallery"
    },
    {
        src: "images/halloween.jpg",
        text: "",
        alt: "Halloween night"
    },
    {
        src: "images/house.jpg",
        text: "",
        alt: "House front view"
    },
    {
        src: "images/ldh.jpg",
        text: "",
        alt: "LDH moment"
    },
    {
        src: "images/movies.jpg",
        text: "",
        alt: "Movie theater visit"
    },
    {
        src: "images/neighbour.jpg",
        text: "",
        alt: "Neighbor's house"
    },
    {
        src: "images/plant.jpg",
        text: "1/80 S | ISO 80 | 30.5mm | -0.7ev | F5.0 | Flash used",
        alt: "Green plant"
    },
    {
        src: "images/sara-beach.jpg",
        text: "",
        alt: "Sara at the beach"
    },
    {
        src: "images/tatwa-gallery.jpg",
        text: "",
        alt: "Tatwa gallery"
    },
    {
        src: "images/tatwa.jpg",
        text: "",
        alt: "Tatwa moment"
    }
];

function loadImages() {
    const gallery = document.getElementById('gallery');
    images.forEach(image => {
        let imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.onclick = () => openModal(image.src, image.text);
        gallery.appendChild(imgElement);
    });
}

function openModal(imageSrc, imageText) {
    document.getElementById('modal-img').src = imageSrc;
    document.getElementById('modal-text').innerText = imageText;
    document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onload = loadImages;
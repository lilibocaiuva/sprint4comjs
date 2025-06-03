// Array storage class
let carouselArr = [];


// Class Carousel
class Carousel {

    constructor(image, text, url) {
        this.image = image;
        this.text = text;
        this.url = url;
    }

    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel.arr = arr;
                Carousel._size = arr.length;
                Carousel.Next(); // start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 2000);
            }
        } else {
            throw "Method Start needs an Array Variable.";
        }
    }

    static Next() {
        const vetor = Carousel.arr[Carousel._sequence];

        document.getElementById("carousel").innerHTML = `
            <a href="${vetor.url}">
                <img src="img/${vetor.image}" alt="Imagem do Carousel"/>
                <p>${vetor.text}</p>
            </a>
        `;

        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }
};

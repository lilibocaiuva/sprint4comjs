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

                
                const container = document.getElementById("carousel");
                const btnPrev = document.createElement("button");
                btnPrev.innerText = "<";
                btnPrev.onclick = function() { Carousel.Previous(); };

                const btnNext = document.createElement("button");
                btnNext.innerText = ">";
                btnNext.onclick = function() { Carousel.Next(true); };

                // Criar elemento de exibição
                Carousel._display = document.createElement("div");
                container.appendChild(Carousel._display);

                // Adicionar botões ao container
                container.appendChild(btnPrev);
                container.appendChild(btnNext);
            

                Carousel.Show(); // start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 2000);
            }
        } else {
            throw "Method Start needs an Array Variable.";
        }
    }

    static Show() {
        const vetor = Carousel.arr[Carousel._sequence];

        Carousel._display.innerHTML = `
            <a href="${vetor.url}">
                <img src="img/${vetor.image}" alt="Imagem do Carousel"/>
                <p>${vetor.text}</p>
            </a>
        `;
    }

    static Next(stopAuto = false) {
        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        Carousel.Show();
        if (stopAuto) Carousel.StopAuto();
    }

    static Previous() {
        Carousel._sequence--;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
        Carousel.Show();
        Carousel.StopAuto();
    }

    static StopAuto() {
        clearInterval(Carousel._interval);
    }
};


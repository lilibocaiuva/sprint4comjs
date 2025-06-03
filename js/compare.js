
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (!(carClass instanceof Car)) {
        throw "You need to set a Car Class";
    }

    if (el.checked) {
        if (carArr.length >= 2) {
            el.checked = false;
            alert("Só é possível comparar até 2 veículos.");
            return;
        }
        if (GetCarArrPosition(carArr, carClass) === -1) {
            carArr.push(carClass);
        }
    } else {
        const pos = GetCarArrPosition(carArr, carClass);
        if (pos !== -1) {
            carArr.splice(pos, 1);
        }
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    if (carArr.length !== 2) return;

    const ids = {
        image: "compare_image",
        modelo: "compare_modelo",
        alturacacamba: "compare_alturacacamba",
        alturaveiculo: "compare_alturaveiculo",
        alturasolo: "compare_alturasolo",
        capacidadecarga: "compare_capacidadecarga",
        motor: "compare_motor",
        potencia: "compare_potencia",
        volumecacamba: "compare_volumecacamba",
        roda: "compare_roda",
        preco: "compare_preco"
    };

    for (let i = 0; i < 2; i++) {
        const car = carArr[i];

        document.getElementById(`${ids.image}_${i}`).innerHTML = `<img src="${car.image}" style="width: 150px;">`;
        document.getElementById(`${ids.modelo}_${i}`).innerText = car.nome;
        document.getElementById(`${ids.alturacacamba}_${i}`).innerText = car.alturaCacamba + " mm";
        document.getElementById(`${ids.alturaveiculo}_${i}`).innerText = car.alturaVeiculo + " mm";
        document.getElementById(`${ids.alturasolo}_${i}`).innerText = car.alturaSolo + " mm";
        document.getElementById(`${ids.capacidadecarga}_${i}`).innerText = car.capacidadeCarga + " kg";
        document.getElementById(`${ids.motor}_${i}`).innerText = car.motor + "L";
        document.getElementById(`${ids.potencia}_${i}`).innerText = car.potencia + " cv";
        document.getElementById(`${ids.volumecacamba}_${i}`).innerText = car.volumeCacamba + " L";
        document.getElementById(`${ids.roda}_${i}`).innerText = car.roda;
        document.getElementById(`${ids.preco}_${i}`).innerText = "R$ " + car.preco.toLocaleString('pt-BR');
    }
}



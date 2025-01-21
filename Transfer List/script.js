let uneseno = document.getElementById("Unos")
let strelicaUnesi = document.getElementById("StrelicaUnesi")
let rbtnStrana = document.getElementsByName("strana")
let prikazBrUkupnoStavkiLevo = document.getElementById("UkupnoLevo")
let prikazBrSelektovanihStavkiLevo = document.getElementById("SelektovanoLevo")
let prikazBrUkupnoStavkiDesno = document.getElementById("UkupnoDesno")
let prikazBrSelektovanihStavkiDesno = document.getElementById("SelektovanoDesno")
let divStavkeLevo = document.getElementById("DivStavkeLevo")
let divStavkeDesno = document.getElementById("DivStavkeDesno")
let strelicaLevo = document.getElementById("strelicaLevo")
let strelicaDesno = document.getElementById("strelicaDesno")
let btnSelektujSveLevo = document.getElementById("btnSelektujSveLevo")
let btnSelektujSveDesno = document.getElementById("btnSelektujSveDesno")
let btnDeselektujSveLevo = document.getElementById("btnDeselektujSveLevo")
let btnDeselektujSveDesno = document.getElementById("btnDeselektujSveDesno")
let leveStavke = document.getElementsByClassName("LeveStavke")
let desneStavke = document.getElementsByClassName("DesnoStavke")



ispisiUkupno()
ispisiSelektovano()
zasivi()
odsivi()

btnSelektujSveLevo.addEventListener("click", btnSelektuj)
btnSelektujSveDesno.addEventListener("click", btnSelektuj)
btnDeselektujSveLevo.addEventListener("click", btnDeselektuj)
btnDeselektujSveDesno.addEventListener("click", btnDeselektuj)
strelicaUnesi.addEventListener("click", dodajStavku)
strelicaLevo.addEventListener("click",premestiLevo)
strelicaDesno.addEventListener("click",premestiDesno)
uneseno.addEventListener("input",skiniSivoSaUneseno)
for (const element of leveStavke) {
    element.addEventListener("click", selektovanaStavkaLevo)
}
for (const element of desneStavke) {
    element.addEventListener("click", selektovanaStavkaDesno)
}



//napravi fju da sklonis sivo sa selektuj sve i deselektuj sve jer ako nema po difoltu nicega oni ostaju celo vreme sivi iako dodas posle nesku stavku

// ako nema stavke koje bi se selektovale ili deselektovale, deaktivirati dugmat selektuj tj deselektuj za tu stranu
function zasivi(){  
    if (divStavkeLevo.childElementCount === 0) {
        btnSelektujSveLevo.classList.add("Siva")
        btnDeselektujSveLevo.classList.add("Siva")
        strelicaDesno.classList.add("Siva")
    }
    if(divStavkeDesno.childElementCount === 0){
        btnSelektujSveDesno.classList.add("Siva")
        btnDeselektujSveDesno.classList.add("Siva")
        strelicaLevo.classList.add("Siva")
    }
    if (uneseno.value === "") {
        strelicaUnesi.classList.add("Siva")
    }
}

function odsivi(){
    if (divStavkeLevo.childElementCount > 0) {
        btnSelektujSveLevo.classList.remove("Siva")
        btnDeselektujSveLevo.classList.remove("Siva")
        strelicaDesno.classList.remove("Siva")
    }
    if(divStavkeDesno.childElementCount > 0){
        btnSelektujSveDesno.classList.remove("Siva")
        btnDeselektujSveDesno.classList.remove("Siva")
        strelicaLevo.classList.remove("Siva")
    }
}

//Strelica za unos da posivi ako nema niceg uneseno
function skiniSivoSaUneseno(){
    if (uneseno.value !== "") {
        strelicaUnesi.classList.remove("Siva")
    }
    if (uneseno.value == "") {
        strelicaUnesi.classList.add("Siva")
    }
}

// Ispis koliko ima ukupno stavki na odredjenoj strani
function ispisiUkupno(){
    prikazBrUkupnoStavkiLevo.innerText = divStavkeLevo.childElementCount
    prikazBrUkupnoStavkiDesno.innerText = divStavkeDesno.childElementCount
}

// Ispis koliko ima ukupno selektovanih stavki na odredjenoj strani
function ispisiSelektovano(){
    prikazBrSelektovanihStavkiLevo.innerText = document.getElementsByClassName("SelektovanaStavkaLevo").length
    prikazBrSelektovanihStavkiDesno.innerText = document.getElementsByClassName("SelektovanaStavkaDesno").length
}

// selektuj SVE stavke
function btnSelektuj(e){
    if (e.target.id === "btnSelektujSveLevo") {
        for (const element of leveStavke) {
            element.classList.add("SelektovanaStavkaLevo");

            // Pronađi sliku unutar svakog elementa i zameni je
            let img = element.querySelector("img");  // Pronadji postojeću sliku
            if (img) {
                img.src = "images/check-zeleni.png";  // Zameni src za selektovanu sliku
                img.classList.add("SlikaSelektovanaLevo")
                ispisiSelektovano()
            }
        }
    }
    else if (e.target.id === "btnSelektujSveDesno") {
        for (const element of desneStavke) {
            element.classList.add("SelektovanaStavkaDesno");

            // Pronađi sliku unutar svakog elementa i zameni je
            let img = element.querySelector("img");  // Pronadji postojeću sliku
            if (img) {
                img.src = "images/check-lila.png";  // Zameni src za selektovanu sliku
                img.classList.add("SlikaSelektovanaDesno")
                ispisiSelektovano()
            }
        }
    }
    
}

//Deselektuj SVE stavke
function btnDeselektuj(e){
    if (e.target.id === "btnDeselektujSveLevo") {
        for (const element of leveStavke) {
            element.classList.remove("SelektovanaStavkaLevo","SlikaSelektovanaLevo");
            for (const i of element.children) {
                if (i.classList.contains("SlikaSelektovanaLevo")) {
                    i.classList.remove("SlikaSelektovanaLevo")
                    ispisiSelektovano()
                }
            }
        }
    }
    else if (e.target.id === "btnDeselektujSveDesno") {
        for (const element of desneStavke) {
            element.classList.remove("SelektovanaStavkaDesno","SlikaSelektovanaDesno");
            for (const i of element.children) {
                if (i.classList.contains("SlikaSelektovanaDesno")) {
                    i.classList.remove("SlikaSelektovanaDesno")
                    ispisiSelektovano()
                }
            }
        }
    }
    
}

//Selektuj/Deselektuj kliknutu stavku, leva strana
function selektovanaStavkaLevo(e){
    if (e.currentTarget.classList.contains("LeveStavke")) {
        
            e.currentTarget.classList.toggle("SelektovanaStavkaLevo");
            // Pronađi sliku unutar svakog elementa i zameni je
            let img = e.currentTarget.querySelector("img");  // Pronadji postojeću sliku
            if (img) {
                img.src = "images/check-zeleni.png";  // Zameni src za selektovanu sliku
                img.classList.toggle("SlikaSelektovanaLevo") 
                ispisiSelektovano()
            }
    }
        
}
//Selektuj/Deselektuj kliknutu stavku, desna strana
function selektovanaStavkaDesno(e){
    if (e.currentTarget.classList.contains("DesnoStavke")) {
        
        e.currentTarget.classList.toggle("SelektovanaStavkaDesno");
        // Pronađi sliku unutar svakog elementa i zameni je
        let img = e.currentTarget.querySelector("img");  // Pronadji postojeću sliku
        if (img) {
            img.src = "images/check-zeleni.png";  // Zameni src za selektovanu sliku
            img.classList.toggle("SlikaSelektovanaDesno") 
            ispisiSelektovano()
        }
    }
    
}


//Dodavanje nove stavke na odredjenu stranu
function dodajStavku() {
    if (uneseno.value !== "") {
      for (const element of rbtnStrana) {
          if (element.checked && element.id === "rbtnLevo") {
            let novaStavka = document.createElement("div");
            let img = document.createElement("img")
            img.classList.add("SlikaPraznaLevo")
        
            novaStavka.classList.add("LeveStavke")
            novaStavka.appendChild(img)
        
            let paragraf = document.createElement("p");
            paragraf.innerHTML = uneseno.value;
            novaStavka.appendChild(paragraf)
        
            novaStavka.addEventListener("click", selektovanaStavkaLevo);// Dodaj event listener za novu stavku, da bi i ta stavka usla za de/selektovanje 
        
            divStavkeLevo.appendChild(novaStavka); // Dodaj novu stavku u roditeljski div
            ispisiUkupno()
            break;
           } else if (element.checked && element.id === "rbtnDesno") {
            let novaStavka = document.createElement("div");
            let img = document.createElement("img")
            img.classList.add("SlikaPraznaDesno")
        
            novaStavka.classList.add("DesnoStavke")
            novaStavka.appendChild(img)
        
            let paragraf = document.createElement("p");
            paragraf.innerHTML = uneseno.value;
            novaStavka.appendChild(paragraf)
        
            novaStavka.addEventListener("click", selektovanaStavkaDesno);// Dodaj event listener za novu stavku, da bi i ta stavka usla za de/selektovanje 
        
            divStavkeDesno.appendChild(novaStavka); // Dodaj novu stavku u roditeljski div
            ispisiUkupno()
            break; 
          }
      }
    }
    else{
        //NAJ POCERVENJI fieldset!!! bo nje unjesene abo naj vidze alertbox
        console.log("greska")
    }
    zasivi();
    odsivi();
}

//premestiLevo
function premestiLevo(){
    let selektovaneStavke = document.querySelectorAll(".DesnoStavke.SelektovanaStavkaDesno"); // Selektuje sve stavke koje su selektovane

    for (const element of selektovaneStavke) { 
         //Svaka stavka koja je selektovana u DesnoStavke treba premestiti i izbrisati
            divStavkeLevo.appendChild(element); // Dodaj novu stavku u roditeljski div
            element.className ="LeveStavke"
            element.children[0].className = "SlikaPraznaLevo"
            element.addEventListener("click", selektovanaStavkaLevo);// Dodaj event listener za novu stavku, da bi i ta stavka usla za de/selektovanje 
            ispisiUkupno()
            ispisiSelektovano()
    }
    zasivi();
    odsivi();
}

//premestiDesno
function premestiDesno(){
    let selektovaneStavke = document.querySelectorAll(".LeveStavke.SelektovanaStavkaLevo"); // Selektuje sve stavke koje su selektovane

    for (const element of selektovaneStavke) { 
         //Svaka stavka koja je selektovana u LevoStavke treba premestiti i izbrisati
            divStavkeDesno.appendChild(element); // Dodaj novu stavku u roditeljski div
            element.className ="DesnoStavke"
            element.children[0].className = "SlikaPraznaDesno"
            element.addEventListener("click", selektovanaStavkaDesno);// Dodaj event listener za novu stavku, da bi i ta stavka usla za de/selektovanje 
            ispisiUkupno()
            ispisiSelektovano()
    }
    zasivi();
    odsivi();
}


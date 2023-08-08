import {petsData} from "./pets.js";
import {shuffle} from "./utils.js";

const body = document.body
const petsRow = document.querySelector(".pets--cards__row")

// burger
document.querySelector(".nav-button").addEventListener("click", function (event) {
    event.stopPropagation()

    if (event.target.parentNode.classList.contains("nav-button") || event.target.classList.contains("nav-button")) {
        document.querySelector(".mobile-nav").classList.toggle("mobile-nav-active")
        document.querySelector(".nav-button").classList.toggle("nav-button-close")
        document.body.classList.toggle("no-scroll")
        document.querySelector(".shadow").classList.toggle("shadow-active")
    }
})

document.querySelector(".navigation-list-mobile").addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        document.querySelector(".mobile-nav").classList.remove("mobile-nav-active")
        document.querySelector(".nav-button").classList.remove("nav-button-close")
        document.body.classList.remove("no-scroll")
    }
})

window.addEventListener("click", function() {
    if (body.classList.contains("no-scroll")) {
        document.querySelector(".mobile-nav").classList.toggle("mobile-nav-active")
        document.querySelector(".nav-button").classList.toggle("nav-button-close")
        document.body.classList.toggle("no-scroll")
        document.querySelector(".shadow").classList.toggle("shadow-active")
    }
})

document.querySelector(".mobile-nav").addEventListener("click", function (event) {
    event.stopPropagation()
})

// carousel slider
const randomArray = shuffle(petsData)

function petsInit(a,b,c) {
    const displayArray= [randomArray[a],randomArray[b],randomArray[c]]

    for (let i = 0; i < displayArray.length; i++) {
        const div = document.createElement("div")
        div.setAttribute("id", displayArray[i].name);
        if (i === 0) {
            div.classList.add("pets--card")
        } else if (i === 1) {
            div.classList.add("pets--card")
            div.classList.add("only-tablet")
        } else if (i === 2) {
            div.classList.add("pets--card")
            div.classList.add("only-desktop")
        }

        const img = document.createElement("img")
        img.setAttribute("src", displayArray[i].img);
        img.setAttribute("alt", displayArray[i].name);
        const p = document.createElement("p")
        p.classList.add("pets--card__name")
        p.innerText = displayArray[i].name
        const button = document.createElement("button")
        button.classList.add("button-2")
        button.innerText = 'Learn more'
        div.append(img, p, button)

        petsRow.append(div)
    }
}
let a = 0
let b = 1
let c = 2
petsInit(a, b, c)

function nextBtnClick() {
    if (a === 7) {
        a = 0
    } else {
        a ++
    }

    if (b === 7) {
        b = 0
    } else {
        b ++
    }

    if (c === 7) {
        c = 0
    } else {
        c ++
    }
    petsRow.innerHTML = ""
    petsInit(a, b, c)
}
function prevBtnClick () {
    if (a === 0) {
        a = 7
    } else {
        a --
    }

    if (b === 0) {
        b = 7
    } else {
        b --
    }

    if (c === 0) {
        c = 7
    } else {
        c --
    }
    petsRow.innerHTML = ""
    petsInit(a, b, c)
}

function initModalData(data) {
    const img = document.createElement("img")
    img.setAttribute("src", data.img);
    img.setAttribute("alt", data.name)

    const div = document.createElement("div")
    const h1 = document.createElement("h1")
    h1.innerText = data.name
    const h2 = document.createElement("h2")
    h2.innerText = `${data.type} – ${data.breed}`
    const p = document.createElement("p")
    p.innerText = data.description

    const ul = document.createElement("ul")
    const age = document.createElement("li")
    age.innerHTML = `<span>Age:</span> ${data.age}`
    const inoculations = document.createElement("li")
    inoculations.innerHTML = `<span>Inoculations:</span> ${data.inoculations}`
    const diseases = document.createElement("li")
    diseases.innerHTML = `<span>Diseases:</span> ${data.diseases}`
    const parasites = document.createElement("li")
    parasites.innerHTML = `<span>Parasites:</span> ${data.parasites}`

    ul.append(age,inoculations, diseases, parasites)
    div.append(h1, h2, p, ul)
    document.querySelector(".modal").append(img, div)
}

petsRow.addEventListener("click", (e) => {
    e.stopPropagation()

    if (e.target.classList === "pets--card" || e.target.closest("div").classList.contains("pets--card")) {
        const id = e.target.closest("div").id
        const data = randomArray.find((p) => {
            if (p.name === id) {
                return p
            }
        })

        initModalData(data)
        document.querySelector(".shadow-modal").classList.add("shadow-modal-active")
        document.querySelector(".modal").classList.add("modal-active")
        document.querySelector(".close-modal").classList.remove("none")
        body.classList.add("no-scroll-2")
    }
})
document.querySelector(".close-modal").addEventListener("click", (e) => {
    // e.stopPropagation()

    document.querySelector(".shadow-modal").classList.remove("shadow-modal-active")
    document.querySelector(".modal").classList.remove("modal-active")
    document.querySelector(".close-modal").classList.add("none")
    body.classList.remove("no-scroll-2")
    document.querySelector(".modal").children[1].remove()
    document.querySelector(".modal").children[1].remove()
})

document.querySelector(".modal").addEventListener("click", (e) => {
    e.stopPropagation()
})


window.addEventListener("click", function () {
    if (body.classList.contains("no-scroll-2")) {
        document.querySelector(".shadow-modal").classList.remove("shadow-modal-active")
        document.querySelector(".modal").classList.remove("modal-active")
        document.querySelector(".close-modal").classList.add("none")
        body.classList.remove("no-scroll-2")
        document.querySelector(".modal").children[1].remove()
        document.querySelector(".modal").children[1].remove()
    }
})

document.querySelector(".prev").addEventListener("click", () => prevBtnClick())
document.querySelector(".prev-mob").addEventListener("click", () => prevBtnClick())
document.querySelector(".next").addEventListener("click", () => nextBtnClick())
document.querySelector(".next-mob").addEventListener("click", () => nextBtnClick())

console.log("1.Реализация burger menu на обеих страницах: (26/26)")
console.log("2. Реализация слайдера-карусели на странице Main: (36/36)")
console.log("3. Реализация пагинации на странице Pets: (36/36)")
console.log("4. Реализация попап на обеих страницах: (12/12)")
console.log("110/110")


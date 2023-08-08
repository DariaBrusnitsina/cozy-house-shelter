import {petsData} from "./pets.js";
import {shuffle} from "./utils.js";

const navButton = document.querySelector(".nav-button")
const navigationList = document.querySelector(".mobile-nav")
const body = document.body
const navList = document.querySelector(".navigation-list-mobile")
const shadow = document.querySelector(".shadow")
const petsRow = document.querySelector(".pets--cards__row")

// burger
navButton.addEventListener("click", function (event) {
    event.stopPropagation()

    if (event.target.parentNode.classList.contains("nav-button") || event.target.classList.contains("nav-button")) {
        navigationList.classList.toggle("mobile-nav-active")
        navButton.classList.toggle("nav-button-close")
        body.classList.toggle("no-scroll")
        shadow.classList.toggle("shadow-active")
    }
})

navList.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        navigationList.classList.remove("mobile-nav-active")
        navButton.classList.remove("nav-button-close")
        body.classList.remove("no-scroll")
    }
})

window.addEventListener("click", function() {
    if (body.classList.contains("no-scroll")) {
        navigationList.classList.toggle("mobile-nav-active")
        navButton.classList.toggle("nav-button-close")
        body.classList.toggle("no-scroll")
        shadow.classList.toggle("shadow-active")
    }
})

navigationList.addEventListener("click", function (event) {
    event.stopPropagation()
})

// pagination
const bigArray = [].concat(shuffle([...petsData]),shuffle([...petsData]), shuffle([...petsData]), shuffle([...petsData]) ,shuffle([...petsData]) ,shuffle([...petsData]))
let page = 1

function getWidth() {
    if (window.innerWidth <= 320) {
        return 3
    } else if (window.innerWidth > 320 && window.innerWidth < 768) {
        return 6
    } else if (window.innerWidth > 768) {
        return 8
    }
}

let petsNum = getWidth()

function cutArray () {
    return bigArray.slice(page * petsNum - petsNum, page * petsNum)
}

function petsInit(page) {
    document.querySelector(".page-number").innerHTML = page
    let arr = cutArray()
    let num = getWidth()

    for (let i = 0; i < num; i++) {
        const div = document.createElement("div")
        div.setAttribute("id", arr[i].name);
        div.classList.add("pets--card", 'ourpets--card')

        const img = document.createElement("img")
        img.setAttribute("src", arr[i].img);
        img.setAttribute("alt", arr[i].name);
        const p = document.createElement("p")
        p.classList.add("pets--card__name")
        p.innerText = arr[i].name
        const button = document.createElement("button")
        button.classList.add("button-2")
        button.innerText = 'Learn more'
        div.append(img, p, button)

        document.querySelector('.pets--cards__grid').append(div)
    }
}

petsInit(page)

//pagination btns
document.querySelector('.our-next').addEventListener('click', (e) => {
    if (page != 48/petsNum) {
        document.querySelector('.our-prev').classList.add("circle-hover")
        document.querySelector('.our-prev').classList.remove("circle-unactive")
        document.querySelector('.fast-prev').classList.add("circle-hover")
        document.querySelector('.fast-prev').classList.remove("circle-unactive")

        page++
        document.querySelector('.pets--cards__grid').innerHTML = ""
        petsInit(page)

        if (page === 48/petsNum) {
            document.querySelector('.our-next').classList.remove("circle-hover")
            document.querySelector('.our-next').classList.add("circle-unactive")
            document.querySelector('.fast-next').classList.remove("circle-hover")
            document.querySelector('.fast-next').classList.add("circle-unactive")
        }
    }
})
document.querySelector('.fast-next').addEventListener('click', (e) => {
    if (page != 48/petsNum) {
        document.querySelector('.our-prev').classList.add("circle-hover")
        document.querySelector('.our-prev').classList.remove("circle-unactive")
        document.querySelector('.fast-prev').classList.add("circle-hover")
        document.querySelector('.fast-prev').classList.remove("circle-unactive")

        page = 48/petsNum
        document.querySelector('.pets--cards__grid').innerHTML = ""
        petsInit(page)
            document.querySelector('.our-next').classList.remove("circle-hover")
            document.querySelector('.our-next').classList.add("circle-unactive")
            document.querySelector('.fast-next').classList.remove("circle-hover")
            document.querySelector('.fast-next').classList.add("circle-unactive")

    }
})
document.querySelector('.our-prev').addEventListener('click', (e) => {
    if (page != 1) {
        document.querySelector('.our-next').classList.add("circle-hover")
        document.querySelector('.our-next').classList.remove("circle-unactive")
        document.querySelector('.fast-next').classList.add("circle-hover")
        document.querySelector('.fast-next').classList.remove("circle-unactive")
        page--
        document.querySelector('.pets--cards__grid').innerHTML = ""
        petsInit(page)

        if (page === 1) {
            document.querySelector('.our-prev').classList.remove("circle-hover")
            document.querySelector('.our-prev').classList.add("circle-unactive")
            document.querySelector('.fast-prev').classList.remove("circle-hover")
            document.querySelector('.fast-prev').classList.add("circle-unactive")
        }
    }
})
document.querySelector('.fast-prev').addEventListener('click', (e) => {
    if (page != 1) {
        document.querySelector('.our-next').classList.add("circle-hover")
        document.querySelector('.our-next').classList.remove("circle-unactive")
        document.querySelector('.fast-next').classList.add("circle-hover")
        document.querySelector('.fast-next').classList.remove("circle-unactive")
        page = 1
        document.querySelector('.pets--cards__grid').innerHTML = ""
        petsInit(page)

            document.querySelector('.our-prev').classList.remove("circle-hover")
            document.querySelector('.our-prev').classList.add("circle-unactive")
            document.querySelector('.fast-prev').classList.remove("circle-hover")
            document.querySelector('.fast-prev').classList.add("circle-unactive")

    }
})

window.addEventListener('resize', (e) => {
    if (window.innerWidth <= 320) {
        document.querySelector('.pets--cards__grid').innerHTML = ""
        petsInit(page)
    } else if (window.innerWidth > 320 && window.innerWidth < 768) {
        document.querySelector('.pets--cards__grid').innerHTML = ""
        petsInit(page)
    } else if (window.innerWidth > 768) {
        document.querySelector('.pets--cards__grid').innerHTML = ""
        petsInit(page)
    }
});




//modal
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

document.querySelector('.pets--cards__grid').addEventListener("click", (e) => {
    e.stopPropagation()

    if (e.target.classList === "pets--card" || e.target.closest("div").classList.contains("pets--card")) {
        const id = e.target.closest("div").id
        const data = petsData.find((p) => {
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


const header = document.getElementById("header-link")
const headerThree = document.getElementsByTagName("h3")

const links = document.getElementsByTagName("a")



document.addEventListener("scroll", (e) => {
    if (headerThree.item(0).getBoundingClientRect().y > 1) {
        header.innerHTML = "My Projects"
    }
    if (headerThree.item(0).getBoundingClientRect().y < 1) {
        header.innerHTML = headerThree.item(0).innerHTML
    }
    if (headerThree.item(1).getBoundingClientRect().y < 1) {
        header.innerHTML = headerThree.item(1).innerHTML
    }
})

links.item(0).addEventListener("click", () => {
    header.innerHTML = headerThree.item(0).innerHTML
})

links.item(1).addEventListener("click", () => {
    header.innerHTML = headerThree.item(1).innerHTML
})

class project {
    constructor(name, description, pictureSrc, link) {
        this.name = name
        this.description = description
        this.pictureSrc = pictureSrc
        this.link = link
    }
    
    name = ""
    description = ""
    pictureSrc = ""
    link = ""
}

let existingProjects = []
let plannedProjects = []
existingProjects.push(new project("Project Portfolio", "A list of planned and existing Projects", "imgs/remainder_icon.png", "file:///C:/Users/Frederik/Documents/Programmieren/Projekte/Web/myWebsites/PortfolioPage/index.html"))
plannedProjects.push(new project("Dividend Calculator", "A Small Calculator for DividendYield and Growth.", "imgs/remainder_icon.png", "sites/dividendYieldCalculator.html"))
plannedProjects.push(new project("ToDo Note Planner", "A ToDo List with notes and planning", "imgs/remainder_icon.png", "sites/todoNotePlanner.html"))
plannedProjects.push(new project("Game Collection", "A collection of some fun games, e.g. Tetris", "imgs/remainder_icon.png", "sites/todoNotePlanner.html"))
plannedProjects.push(new project("GuitarTabs", "A Collection of Tabs that i want to learn on Guitar", "imgs/remainder_icon.png", ""))
plannedProjects.push(new project("DepotRebalancing", "A Overview of all assets and needed rebalancing", "imgs/remainder_icon.png", ""))
plannedProjects.push(new project("QuizApp", "A small but fun Quiz", "imgs/remainder_icon.png", ""))
plannedProjects.push(new project("QRCodeGenerator", "A Generator for your favorite QR-Codes", "imgs/remainder_icon.png", ""))
plannedProjects.push(new project("WeatherApp", "A quick overview over your local Weather Report", "imgs/remainder_icon.png", ""))
plannedProjects.push(new project("Online Shop", "A nice and tidy Online Shop", "imgs/remainder_icon.png", ""))
plannedProjects.push(new project("Charity Finder", "Find yourself the perfect Charity to donate to", "imgs/remainder_icon.png", ""))
plannedProjects.push(new project("TimeZone Tracker", "Keep Track of all the time zones", "imgs/remainder_icon.png", ""))
plannedProjects.push(new project("Acronym Finder", "Find Acronyms and discuss about them", "imgs/remainder_icon.png", ""))
plannedProjects.push(new project("URL Shortener", "Keep your URLs nice and short", "imgs/remainder_icon.png", ""))
plannedProjects.push(new project("Audio Player", "Play your favorite Audio", "imgs/remainder_icon.png", ""))
plannedProjects.push(new project("Luxury Brand", "Website of the next big luxurios brand", "imgs/remainder_icon.png", ""))
plannedProjects.push(new project("Realtime Chat", "Chat with somebody", "imgs/remainder_icon.png", ""))
plannedProjects.push(new project("Movie Database", "A collection of your favorite movies", "imgs/remainder_icon.png", ""))
plannedProjects.push(new project("Currency and Measurement Converter", "Calculate between different Currencies and Measurements", "imgs/remainder_icon.png", ""))
plannedProjects.push(new project("Calculator", "A basic calculator", "imgs/remainder_icon.png", ""))
plannedProjects.push(new project("ToDo List", "A quick and simple ToDo List", "imgs/remainder_icon.png", ""))


var existingList = document.getElementById("existing-list")
var plannedList = document.getElementById("planned-list")

existingProjects.forEach((project) => {
    existingList.innerHTML += `<li class='project project-exist' id='project' onclick='window.location = "${project.link}"'>
                                        <img src='${project.pictureSrc}' class='project-image'>
                                        <span class='project-texts'>
                                        <span class='project-title' id='project-title'>
                                            ${project.name}
                                        </span>
                                        <span class='project-info' id='project-info'>
                                            <i>${project.description}</i>
                                        </span>
                                    </span>
                                </li>`
})

plannedProjects.forEach((project) => {
    plannedList.innerHTML += `<li class='project project-planned' id='project' onclick='window.location = "${project.link}"'>
                                        <img src='${project.pictureSrc}' class='project-image'>
                                        <span class='project-texts'>
                                        <span class='project-title' id='project-title'>
                                            ${project.name}
                                        </span>
                                        <span class='project-info' id='project-info'>
                                            <i>${project.description}</i>
                                        </span>
                                    </span>
                                </li>`
})
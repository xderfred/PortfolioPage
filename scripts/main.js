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
const portfolioWebsite = new project("Project Portfolio", "A list of planned and existing Projects", "imgs/remainder_icon.png", "sites/portfolioWebsite.html")

const dividendYieldCalculator = new project("Dividend Calculator", "A Small Calculator for DividendYield and Growth.", "imgs/remainder_icon.png", "sites/dividendYieldCalculator.html")
const todoNotePlanner = new project("ToDo Note Planner", "A ToDo List with notes and planning", "imgs/remainder_icon.png", "sites/todoNotePlanner.html")
const gameCollection = new project("Game Collection", "A collection of some fun games, e.g. Tetris", "imgs/remainder_icon.png", "sites/todoNotePlanner.html")


existingProjects.push(portfolioWebsite)
plannedProjects.push(dividendYieldCalculator)
plannedProjects.push(todoNotePlanner)
plannedProjects.push(gameCollection)

var existingList = document.getElementById("existing-list")
var plannedList = document.getElementById("planned-list")

var entry = document.getElementById("project")
var info = document.getElementById("project-info")
var title = document.getElementById("project-title")

console.log("portfolioWebsite", portfolioWebsite);
console.log("portfolioWebsite.name", portfolioWebsite.name);
console.log("portfolioWebsite.description", portfolioWebsite.description);
console.log("portfolioWebsite.pictureSrc", portfolioWebsite.pictureSrc);

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
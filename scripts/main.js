class project {
    constructor(name, description, pictureSrc) {
        this.name = name
        this.description = description
        this.pictureSrc = pictureSrc
    }
    

    name = ""
    description = ""
    pictureSrc = ""
}

let existingProjects = []
let plannedProjects = []
const d = new project()
const dividendYieldCalculator = new project("Dividend Calculator", "A Small Calculator for DividendYield and Growth.", "/imgs/")
const porfolioWebsite = new project("Project Portfolio", "A list of planned and existing Projects", "/imgs/")
const todoNotePlanner = new project("ToDo Note Planner", "A ToDo List with notes and planning", "/imgs/")


existingProjects.push(porfolioWebsite)
plannedProjects.push(dividendYieldCalculator)
plannedProjects.push(todoNotePlanner)

var existingList = document.getElementById("existing-list")
var plannedList = document.getElementById("planned-list")

var entry = document.getElementById("project")
var info = document.getElementById("project-info")
var title = document.getElementById("project-title")

console.log("porfolioWebsite", porfolioWebsite);
console.log("porfolioWebsite.name", porfolioWebsite.name);
console.log("porfolioWebsite.description", porfolioWebsite.description);
console.log("porfolioWebsite.pictureSrc", porfolioWebsite.pictureSrc);

existingProjects.forEach((project) => {
    
    existingList.innerHTML += "<li> <div class=\"project project-exist\" id=\"project\"> <img src=" + project.pictureSrc + " class=\"project-image\"> <h4 class=\"project-title\" id=\"project-title\">" + project.name + "</h4><p class=\"project-info\" id=\"project-info\">" + project.description + "</p> </div></li>"
})

plannedProjects.forEach((project) => {
    plannedList.innerHTML += "<li> <div class=\"project project-exist\" id=\"project\"> <img src=" + project.pictureSrc + " class=\"project-image\"> <h4 class=\"project-title\" id=\"project-title\">" + project.name + "</h4><p class=\"project-info\" id=\"project-info\">" + project.description + "</p> </div></li>"
})
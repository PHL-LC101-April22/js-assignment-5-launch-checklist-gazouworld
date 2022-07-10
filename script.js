// Write your JavaScript code here!

// const { formSubmission, myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();


    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

        pickPlanet(listedPlanets).name


        addDestinationInfo(document, pickPlanet(listedPlanets).name, diameter, star, distance, moons, imageUrl)




        // fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {

        // response.json().then(function (json) {
        // let items = Math.floor(Math.random() * json.length);

        //     let missionTar = document.getElementById("missionTarget");
        //     missionTar.innerHTML = `
        // <h2>Mission Destination</h2>
        //     <ol>
        //         <li>Name: ${json[items].name} </li>
        //         <li>Diameter: ${json[items].diameter} </li>
        //         <li>Star: ${json[items].star}</li>
        //         <li>Distance from Earth: ${json[items].distance} </li>
        //         <li>Number of Moons: ${json[items].moons} </li>
        //     </ol>
        //     <img src="${json[items].image}">


    })

    let list = document.getElementById("faultyItems")
    list.style.visibilty = "hidden";
    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault()
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        formSubmission(document, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value)
    });
});
// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     let pilotNameInput = document.querySelector("input[name=pilotName]");
//     let copilotNameInput = document.querySelector("input[name=copilotName]");
//     let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
//     let cargoMassInput = document.querySelector("input[name=cargoMass]");
//     let button = document.getElementById("formSubmit");
//     button.addEventListener("submit", function () {
//         if (input.value == "") {
//             alert("All fields are required");
//             event.preventDefault();
//             return "Empty";
//         } else if (pilotNameInput == Number) {
//             alert("This field requires a name")
//             event.preventDefault();
//             return "Is a Number";
//         } else if (copilotNameInput == Number) {
//             alert("This field requires a name");
//             event.preventDefault();
//             return "Is a Number";
//         } else if (isNaN(fuelLevelInput)) {
//             alert("This field requires a number");
//             event.preventDefault();
//             return "Is a Number";
//         } else if (isNaN(cargoMassInput)) {
//             alert("This field requires a number")
//             event.preventDefault();
//         } else {
//             // input.value = input.value + form;
//             return formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

//         }
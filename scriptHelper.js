// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    // let name = json.name;
    // let diameter = json.diameter;
    // let star = json.star;
    // let distance = json.distance;
    // let moons = json.moons;
    // let image = json.image;


    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `
    
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>

                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `
}

function validateInput(testInput) {
    if (testInput == "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");



    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required");
        // console.log("Frog!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Fields must be valid");
        // console.log("Frog!");
    } else {
        list.style.visibilty = "visible";

        if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000) {
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level is sufficient for launch`;
            cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
            launchStatus.innerHTML = `Shuttle is ready for launch`
            document.getElementById("launchStatus").style.color = 'green'
            list.style.visibility = "visible";
        } else if (fuelLevelInput.value >= 10000 && cargoMassInput.value > 10000) {
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level is sufficient for launch`;
            cargoStatus.innerHTML = `Cargo mass is too high for launch`;
            launchStatus.innerHTML = `Shuttle is not ready for launch`
            document.getElementById("launchStatus").style.color = 'red'
            list.style.visibility = "visible";
        } else if (fuelLevelInput.value < 10000 && cargoMassInput.value <= 10000) {
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level is not sufficient for launch`;
            cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
            launchStatus.innerHTML = `Shuttle is not ready for launch`
            document.getElementById("launchStatus").style.color = 'red'
            list.style.visibility = "visible";
        } else if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level is not sufficient for launch`;
            cargoStatus.innerHTML = `Cargo mass is too high for launch`;
            launchStatus.innerHTML = `Shuttle is not ready for launch`
            document.getElementById("launchStatus").style.color = 'red'
            list.style.visibility = "visible";

        }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
        return response.json()
    }).then(function (json) {
        console.log(json);
        return json;
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let items = Math.floor(Math.random() * planets.length);
    return planets[items];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
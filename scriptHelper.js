// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
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
    //let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let pilotStatusUpdate = document.getElementById("pilotStatus");
    let copilotStatusUpdate = document.getElementById("copilotStatus");
    let cargoStatusUpdate = document.getElementById("cargoStatus");
    let fuelStatusUpdate = document.getElementById("fuelStatus");
    let launchStatusCheckUpdate = document.getElementById("launchStatusCheck");


    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required");
        // console.log("Frog!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Fields must be valid");
        // console.log("Frog!");
    } else {
        list.style.visibilty = "visible";

        // faultyItems.style.visibility = "visible";

        // pilotStatusUpdate.innerHTML = "New text!"


        // fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000


        pilotStatusUpdate.innerHTML = `${pilot} is ready for launch`;
        copilotStatusUpdate.innerHTML = `${copilot} is ready for launch`;
        fuelStatusUpdate.innerHTML = `${fuelLevel} is high enough for launch`;
        cargoStatusUpdate.innerHTML = `${cargoLevel} mass is low enough for launch`;

    }
    // document.getElementById("copilotStatus").innerHTML = ` is ready for launch`;
    // document.getElementById("fuelStatus").innerHTML = ` is ready for launch`;
    // // document.getElementById("fuelStatus").innerHTML = ` is ready for launch`;
    // // copilotStatus.innerHTML = `${copilot} is ready for launch`;
    // fuelStatus.innerHTML = `${fuelLevel} is sufficient for launch`;
    // cargoStatus.innerHTML = `${cargoLevel} is sufficient for launch`;

    //these below are make pilotStatusUpdate not work if they are on.  Have to figure out why
    // launchStatusCheckUpdate.innerHTML = `Shuttle is ready for launch`
    // document.getElementById("launchStatusCheck").innerHTML = `Shuttle is ready for launch`;
    // document.getElementById("launchStatusCheck").style.color = "green";


    // // list.style.visibilty = "visible";

    // console.log("frog");
    // alert("frog");



    // } else if (validateInput(pilot) !== "Empty" && validateInput(copilot) !== "Empty" && validateInput(fuelLevel) >= 10000 && validateInput(cargoLevel) <= 10000) {
    //     alert("What the fuck dude!")
    //     list.style.visibilty = "visible";
    //     pilotStatus.innerHTML = `${pilot} is ready for launch`;
    //     copilotStatus.innerHTML = `${copilot} is ready for launch`;
    //     fuelStatus.innerHTML = `${fuelLevel} is sufficient for launch`;
    //     cargoStatus.innerHTML = `${cargoLevel} is suffiecient for launch`;
    //     document.getElementById("launchStatusCheck").innerHTML = `Shuttle is ready for launch`;
    //     document.getElmentById("launchStatusCheck").style.color = "green";
    //     console.log("frog, frog, frog, frog, frog, frog, frog, frog, frog, ")


    //     // pilotStatus.innerHTML = `${pilot} is ready for launch`;
    //     // document.getElementById("copilotStatus").innerHTML = `${copilotNameInput} is ready for launch`;
    //     // document.getElementById("fuelStatus").innerHTML = `${fuelLevelInput} is sufficient for launch`;
    //     // document.getElementById("cargoStatus").innerHTML = `${cargoMassInput} is sufficient for launch`;
    //     // document.getElementById("launchStatusCheck").innerHTML = `Shuttle is ready for launch`;
    //     // document.getElmentById("launchStatusCheck").style.color = "green";

    //     // make them all look like above
    //     // no inputs 
    //     //im repeating all over and over again the getelements etss

    // } else if (validateInput(pilot) !== "Empty" && validateInput(copilot) !== "Empty" && validateInput(fuelLevel) < 10000 && validateInput(cargoLevel) <= 10000) {
    //     pilotStatus.innerHTML = `${pilot} is ready for launch`;
    //     copilotStatus.innerHTML = `${copilot} is ready for launch`;
    //     fuelStatus.innerHTML = `${fuelLevel} is not sufficient for launch`;
    //     cargoStatus.innerHTML = `${cargoLevel} is suffiecient for launch`;
    //     document.getElementById("launchStatusCheck").innerHTML = `Shuttle is not ready for launch`;
    //     document.getElmentById("launchStatusCheck").style.color = "red";
    //     list.style.visibilty = "visible";
    //     // document.getElementById("pilotStatus").innerHTML = `${pilotNameInput} is ready for launch`;
    //     // document.getElementById("copilotStatus").innerHTML = `${copilotNameInput} is ready for launch`;
    //     // document.getElementById("fuelStatus").innerHTML = `${fuelLevelInput} is not sufficient for launch`;
    //     // document.getElementById("cargoStatus").innerHTML = `${cargoMassInput} is sufficient for launch`;
    //     // document.getElementById("launchStatusCheck").innerHTML = `Shuttle is ready not for launch`;
    //     // document.getElmentById("launchStatusCheck").style.color = "red";

    // } else if (validateInput(pilot) !== "Empty" && validateInput(copilot) !== "Empty" && validateInput(fuelLevel) >= 10000 && validateInput(cargoLevel) > 10000) {
    //     pilotStatus.innerHTML = `${pilot} is ready for launch`;
    //     copilotStatus.innerHTML = `${copilot} is ready for launch`;
    //     fuelStatus.innerHTML = `${fuelLevel} is sufficient for launch`;
    //     cargoStatus.innerHTML = `${cargoLevel} is not suffiecient for launch`;
    //     document.getElementById("launchStatusCheck").innerHTML = `Shuttle is not ready for launch`;
    //     document.getElmentById("launchStatusCheck").style.color = "red";
    //     list.style.visibilty = "visible";

    //     // document.querySelector("input[name=pilotName]").innerHTML = `${pilotNameInput}`;
    //     // document.getElementById("pilotStatus").innerHTML = `${pilotNameInput} is ready for launch`;
    //     // document.querySelector("input[name=copilotName]").innerHTML = `${copilotNameInput}`;
    //     // document.getElementById("copilotStatus").innerHTML = `${copilotNameInput} is ready for launch`;
    //     // document.getElementById("fuelStatus").innerHTML = `${fuelLevelInput} is sufficient for launch`;
    //     // document.getElementById("cargoStatus").innerHTML = `${cargoMassInput} there is too much for the shuttle to take off`;
    //     // document.getElementById("launchStatusCheck").innerHTML = `Shuttle is not ready for launch`;
    //     // document.getElmentById("launchStatusCheck").style.color = "red";

    // } else if (validateInput(pilot) !== "Empty" && validateInput(copilot) !== "Empty" && validateInput(fuelLevel) < 10000 && validateInput(cargoLevel) > 10000) {
    //     pilotStatus.innerHTML = `${pilot} is ready for launch`;
    //     copilotStatus.innerHTML = `${copilot} is ready for launch`;
    //     fuelStatus.innerHTML = `${fuelLevel} is not sufficient for launch`;
    //     cargoStatus.innerHTML = `${cargoLevel} is not suffiecient for launch`;
    //     document.getElementById("launchStatusCheck").innerHTML = `Shuttle is not ready for launch`;
    //     document.getElmentById("launchStatusCheck").style.color = "red";
    //     list.style.visibilty = "visible";

    // } else {
    // list.style.visibilty = "visible";
}
// }





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
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

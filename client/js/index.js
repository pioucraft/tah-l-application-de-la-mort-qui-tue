var Game = {
    "particles": {
        "up": 0,
        "down": 0,
        "electron": 0,
        "proton": 0,
        "neutron": 0
    },
    "atoms": {

    }
}

var hydrogen = 0
var helium = 0
var lithium = 0
var beryllium = 0
var boron = 0
var carbon = 0

window.onload = function () {
    //add the particles amounts to the screens on the right spot
    document.getElementById("rightPart-particles-up").innerHTML = document.getElementById("rightPart-particles-up").innerHTML + Game.particles.up
    document.getElementById("rightPart-particles-down").innerHTML = document.getElementById("rightPart-particles-down").innerHTML + Game.particles.down
    document.getElementById("rightPart-particles-electron").innerHTML = document.getElementById("rightPart-particles-electron").innerHTML + Game.particles.electron
    document.getElementById("rightPart-particles-proton").innerHTML = document.getElementById("rightPart-particles-proton").innerHTML + Game.particles.proton
    document.getElementById("rightPart-particles-neutron").innerHTML = document.getElementById("rightPart-particles-neutron").innerHTML + Game.particles.neutron
    fetch("files/periodicTable.json").then(data => data.json()).then(data => {

        for(let i=0;i<data["elements"].length;i++) {
            let atomsNumberThing = 0
            if(Game["atoms"][data["elements"][i]["name"]] != undefined) {
                atomsNumberThing = Game["atoms"][data["elements"][i]["name"]]
            }
            document.getElementById("rightPart-atoms").innerHTML += `<h3 id="rightPart-atoms-${data["elements"][i]["name"]}">${data["elements"][i]["name"]} : ${atomsNumberThing}</h3>`
        }
    })
}


//set an interval to update each 5 seconds the amount of particles acording to 1/3 chance of getting one of them each time
loop = setInterval(() => {
    let randomquark = Math.floor((Math.random() * 3) + 1);
    if (randomquark === 1) {
        Game.particles.up = Game.particles.up + 1;
        document.getElementById("rightPart-particles-up").innerHTML = (document.getElementById("rightPart-particles-up").innerHTML).split(":")[0] + ": " + Game.particles.up
    } else if (randomquark === 2) {
        Game.particles.down = Game.particles.down + 1;
        document.getElementById("rightPart-particles-down").innerHTML = (document.getElementById("rightPart-particles-down").innerHTML).split(":")[0] + ": " + Game.particles.down
    } else {
        Game.particles.electron = Game.particles.electron + 1;
        document.getElementById("rightPart-particles-electron").innerHTML = (document.getElementById("rightPart-particles-electron").innerHTML).split(":")[0] + ": " + Game.particles.electron
    }
}, 10 * 1000);

function showCraftMenu() {
    fetch("craft.html").then(data => data.text()).then(data => {
        document.getElementById('middlePart-iframe').innerHTML = `<div id="middlePart-iframe-iframe">${data}</div>`
    })

}

function putIndexPage() {
    document.getElementById("middlePart-iframe").innerHTML = ""
}

let kubik = document.getElementById("kubik");
let kubikAngle = 0
let igrok = document.getElementById("player")
let kirpich = document.getElementById("player2")
let steps = 0
let good = document.getElementById("good")
let kubikRandom
let ocheredy = "Пылесос"
let pylesteps = 0
kubik.onclick = function () {
    if (good.innerHTML == "Игрок: Пылесос") {
        good.innerHTML = "Игрок: Телепузик"
        ocheredy = "Телепузик"
    }
    else {
        good.innerHTML = "Игрок: Пылесос"
        ocheredy = "Пылесос"
    }
    kubik.style.pointerEvents = "none"
    kubikAngle = kubikAngle + 1800
    console.log(Math.floor(Math.random() * 6 + 1));
    kubik.style.transform = "rotate(" + kubikAngle + "deg)"
    let kubikInt = setInterval(() => {
        kubikRandom = (Math.floor(Math.random() * 6 + 1));
        kubik.src = "dice" + kubikRandom + ".png"
    }, 600);
    setTimeout(() => {
        clearInterval(kubikInt)
        if (ocheredy == "Телепузик") {
            let miniSteps = 0
            let gameInt = setInterval(() => {
                if (steps < 99) {
                    steps = steps + 1
                }
                else{
                    good.innerHTML == "Телепузик победил!"
                }
                move()
                miniSteps++
                if (miniSteps == kubikRandom) {
                    kubik.style.pointerEvents = "auto"
                    clearInterval(gameInt)
                    if (steps == 5) {
                        steps = 26
                        move()
                    }
                    if (steps == 8) {
                        steps = 49
                        move()
                    }
                    if (steps == 19) {
                        steps = 38
                        move()
                    }
                    if (steps == 24) {
                        steps = 56
                        move()
                    }
                    if (steps == 52) {
                        steps = 71
                        move()
                    }
                    if (steps == 60) {
                        steps = 81
                        move()
                    }
                    if (steps == 53) {
                        steps = 84
                        move()
                    }
                    if (steps == 42) {
                        steps = 15
                        move()
                    }
                    if (steps == 54) {
                        steps = 33
                        move()
                    }
                    if (steps == 69) {
                        steps = 47
                        move()
                    }
                    if (steps == 95) {
                        steps = 81
                        move()
                    }
                    if (steps == 94) {
                        steps = 72
                        move()
                    }
                    if (steps == 77) {
                        steps = 41
                        move()
                    }
                }
            }, 200);
        }
        else {
            let miniSteps = 0
            let gameInt = setInterval(() => {
                if (pylesteps < 99) {
                    pylesteps = pylesteps + 1
                }
                else{
                    good.innerHTML == "Пылесос победил!" 
                }
                move()
                miniSteps++
                if (miniSteps == kubikRandom) {
                    kubik.style.pointerEvents = "auto"
                    clearInterval(gameInt)
                    if (pylesteps == 5) {
                        pylesteps = 26
                        move()
                    }
                    if (pylesteps == 8) {
                        pylesteps = 49
                        move()
                    }
                    if (pylesteps == 19) {
                        pylesteps = 38
                        move()
                    }
                    if (pylesteps == 24) {
                        pylesteps = 56
                        move()
                    }
                    if (pylesteps == 52) {
                        pylesteps = 71
                        move()
                    }
                    if (pylesteps == 60) {
                        pylesteps = 81
                        move()
                    }
                    if (pylesteps == 53) {
                        pylesteps = 84
                        move()
                    }
                    if (pylesteps == 42) {
                        pylesteps = 15
                        move()
                    }
                    if (pylesteps == 54) {
                        pylesteps = 33
                        move()
                    }
                    if (pylesteps == 69) {
                        pylesteps = 47
                        move()
                    }
                    if (pylesteps == 95) {
                        pylesteps = 81
                        move()
                    }
                    if (pylesteps == 94) {
                        pylesteps = 72
                        move()
                    }
                    if (pylesteps == 77) {
                        pylesteps = 41
                        move()
                    }
                }
            }, 200);
        }
    }, 3000);
}
function move() {
    if (ocheredy == "Телепузик") {
        if (steps < 10) {
            igrok.style.left = steps + "0%"
        }
        else {
            if (Math.floor(steps / 10) % 2 == 0) {
                igrok.style.left = steps % 10 + "0%"
            }
            else {
                igrok.style.left = 9 - steps % 10 + "0%"
            }
            igrok.style.bottom = Math.floor(steps / 10) + "0%"
        }
    }
    else {
        if (pylesteps < 10) {
            kirpich.style.left = pylesteps + "0%"
        }
        else {
            if (Math.floor(pylesteps / 10) % 2 == 0) {
                kirpich.style.left = pylesteps % 10 + "0%"
            }
            else {
                kirpich.style.left = 9 - pylesteps % 10 + "0%"
            }
            kirpich.style.bottom = Math.floor(pylesteps / 10) + "0%"
        }
    }
}
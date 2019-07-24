document.querySelector("#activate-flight").addEventListener("click", function () {
    flightHandlerFunction()
})
document.querySelector("#activate-mindreading").addEventListener("click", function () {
    mindReaderFunction()
})




function flightHandlerFunction () {
    document.querySelector("#flight").className = "power enabled"
}
function mindReaderFunction () {
    document.querySelector("#mindreading").className = "power enabled"
}



let bodyDOM = document.querySelector("#pepe")
let nav = document.querySelector("#navbar").offsetHeight
let alturaContenido = parseInt(bodyDOM.offsetHeight) + 100
let cortinaBody = document.querySelector(".cortina")
cortinaBody.style.height = alturaContenido + "px"
cortinaBody.style.top = nav + "px"
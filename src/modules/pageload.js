import { schedulesDay } from "./schedules/load.js"

//captura o evento enquanto carrega os conteúdos
document.addEventListener("DOMContentLoaded", function (){
    schedulesDay()
})
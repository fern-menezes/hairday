import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/cancel-schedule.js"


const periods = document.querySelectorAll(".period");

//gera um evento de click para cada lista

periods.forEach((period) => {
    //capitura o click no x
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")){
            //obtem a li pai do elemento clicado
            const item = event.target.closest("li");

            //pega o id do agendamento para remover
            const { id } = item.dataset

            //confirma o id selecionado e se deseja mesmo remover
            if(id){
                const isConfirm = confirm ("Deseja mesmo cancelar esse agendamento?")

                if(isConfirm){
                //faz a requisição na api para cancelar
                await scheduleCancel({ id })
                //recarrega os agendamentos
                schedulesDay()
;            }
            }
        }
    })
})
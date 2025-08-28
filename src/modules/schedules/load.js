import { hoursLoad } from "../form/hours";

//seleciona o input de data
const selectedDate = document.getElementById("date");

export function schedulesDay(){
    //obtem a data do input
    const date = selectedDate.value;
 //busca na api os agendamentos para mostrar na tela, renderiza as horas disponíveis
     hoursLoad({ date });
 //mostrar os horários disponíveis,levando em consideração os horários que não estão marcados e bloquear horários antigas


}
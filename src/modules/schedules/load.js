import { hoursLoad } from "../form/hours";
import { scheduleFetchByDay } from "../../services/schedule-day.js"
import { scheduleShow } from "../schedules/show.js"

//seleciona o input de data
const selectedDate = document.getElementById("date");

export async function schedulesDay(){

    //obtem a data do input
    const date = selectedDate.value;

    //busca na api os agendamentos para mostrar na tela 
    const dailySchedules = await scheduleFetchByDay({ date });

    //renderizar os agendamentos na tela
    scheduleShow({ dailySchedules });

    
    //mostrar os horários disponíveis,levando em consideração os horários que não estão marcados e bloquear horários antigas, renderiza as horas disponíveis
    hoursLoad({ date, dailySchedules });

}
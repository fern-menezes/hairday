import { openingHours } from "../../utils/opening-hours.js"
import dayjs from "dayjs";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours")

export function hoursLoad( { date, dailySchedules }){
    //limpa a lista de horarios
    hours.innerHTML = "";

    //obtem a lista de todos os horarios ocupados
    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

    const opening = openingHours.map((hour) => {
        //Recupera a hora
        const [sheduleHour] = hour.split(":");
        //console.log(sheduleHour);

        //adiciona o verificador de hora passada para bloquear
        const isHourPast = dayjs(date).add(sheduleHour, "hour").isBefore(dayjs());
        //console.log(sheduleHour, isHourPast);

        const available = !unavailableHours.includes(hour) && !isHourPast;
        return {
            hour,
            available
        }
    })

    //renderizar os horários
    opening.forEach(({hour, available }) => {
        //pega o que estava no html, que foi ocultado, e cria a estrutura com js
        const li = document.createElement("li");
        //adiciona classe ao elemento do html
        li.classList.add("hour");
        //nesse caso a classe possui dois tipos, então vamos adiciona-la de forma condicional
        li.classList.add(available ? "hour-available" : "hour-unavailable");

        li.textContent = hour;

        if(hour === "9:00"){
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00"){
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00"){
            hourHeaderAdd("Noite")
        }
        

        hours.append(li);
    })

    //Adiciona o evento de click nos horários disponiveis
    hoursClick();
}

function hourHeaderAdd(tittle){
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = tittle;

    hours.append(header);
}
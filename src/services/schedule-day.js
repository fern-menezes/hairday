import { apiConfig } from "./api-config.js"
import dayjs from "dayjs"


export async function scheduleFetchByDay({ date }){
    try{
        //faz a requisição para mostrar o resultado na tela
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        //converte para json
        const data = await response.json()

        //filtra os agendamentos do dia
        const dailySchedules = data.filter((schedule) => 
            dayjs(date).isSame(schedule.when, "day")
    )
    return dailySchedules;

    } catch (error){
        console.log(error)
        alert("Não foi possível buscar os agendamentos da data selecionada.")
    }
}
import {  apiConfig } from "./api-config.js"

export async function scheduleCancel( { id }){
    try{
        //faz a requisição do id do agendamento
        await fetch (`${apiConfig.baseURL}/schedules/${id}`, {
            //definir a configuração dessa requisição
            method: 'DELETE',
        })
        alert ("Agendamento cancelado com sucesso! ✅")

    } catch (error){
        console.log(error)
        alert ("Não foi possível cancelar o agendamento, tente novamente mais tarde.")
    }
}
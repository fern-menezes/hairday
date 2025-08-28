import { apiConfig } from "./api-config.js";

export async function scheduleNew( { id, name, when}){
    try{
        //faz a requisição do novo agendamento
        await fetch (`${apiConfig.baseURL}/schedules`, {
            //definir a configuração dessa requisição
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id, name, when}),
        })
        alert ("Agendamento realizado com sucesso! ✅")
    } catch (error){
        alert ("Não foi possível agendar, tente novamente mais tarde.")
        console.log(error)
    }
}
import dayjs from "dayjs";


const form = document.querySelector("form");
const selectDate = document.getElementById("date");
//data atual numa constante para não precisar repetir o código
const today = dayjs(new Date()).format("YYYY-MM-DD");
const clientName = document.getElementById("client")

//Carrega a data atual
selectDate.value = today;
//bloquear datas anteriores
selectDate.min = today;

form.onsubmit =  (event) => {
    event.preventDefault()

    //console.log("Enviado")
    try{
        //Recuperar o nome do cliente 
        const name = clientName.value.trim();

        if(!name){
            return alert("Informe o nome do cliente!")
        }

        //pegar o horário selecionadao no form
        const hourSelected = document.querySelector(".hour-selected");

        if(!hourSelected){
            return alert ("Selecione um horário.")
        }

        //Recuperar somente a hora
        const [hour] = hourSelected.innerText.split(":")

        //Insere a hora na data
        const when = dayjs(selectDate.value).add(hour, "hour")

        //gerar um id para o agendamento
        const id = new Date().getTime()

        
    }catch (error) {
        alert("Não foi possível realizar o agendamento. Tente outro horário!")
        console.log(error)
    }
}
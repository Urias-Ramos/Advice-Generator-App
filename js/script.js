var btnAdvice = document.getElementById('btn-advice');

//al presionar el boton genera los consejos.
btnAdvice.addEventListener('click', loadAdvice);

/**
 * Esta funcion es la responsable de realizar una solicitud a la 
 * API "https://api.adviceslip.com/advice" para obtener un consejo.
 */
function loadAdvice() {
    const api = "https://api.adviceslip.com/advice";//url de la API

    const adviceId = document.getElementById("id-advice");
    const adviceQuote = document.getElementById("consejo");

    fetch(api).then((response) => {
        return response.json();
    }).then((data) => {
        //aqui se extrae el id y el consejo del objeto slip que viene en formato JSON.

        const adviceJson = data["slip"]; // objeto
        adviceId.innerHTML = adviceJson["id"]; //atributo id
        adviceQuote.innerHTML = adviceJson["advice"]; // consejo
    });
}

//genera un consejo al inicio
loadAdvice();
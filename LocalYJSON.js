
const fechaNumero = document.getElementById('fechaNumero');
const fechaTexto = document.getElementById('fechaTexto');
const fechaMes = document.getElementById('fechaMes');
const fechaAnio = document.getElementById('fechaAnio');




const establecerFecha = () => {
    const date = new Date();
    fechaNumero.textContent = date.toLocaleString('es', { day: 'numeric' });
    fechaTexto.textContent = date.toLocaleString('es', { weekday: 'long' });
    fechaMes.textContent = date.toLocaleString('es', { month: 'long' });
    fechaAnio.textContent = date.toLocaleString('es', { year: 'numeric' });
};

// Agregando Localstorage + JSON 2° Pre-Entrega 



const input = document.querySelector(`.input-btn input`)
const listOcio = document.querySelector(`.list-ocio ul`)
const message = document.querySelector(`.list-ocio`)

let ocios = [];

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', () => {
        ocios = JSON.parse(localStorage.getItem('ocios')) || [];
        createHTML();
    });

    listOcio.addEventListener('click', deleteTask);
}

function deleteTask(e){
    if (e.target.tagName == 'SPAN') {
        const deleteId = parseInt(e.target.getAttribute('Ocios-id'));
        ocios = ocios.filter(Ocios => Ocios.id !== deleteId);
        createHTML();
    }
}



function agregarOcio(){
    event.preventDefault() 

    const Ocios = input.value;
    if (Ocios === '') {
        showError()
        return
    }

    const OciosObj = {
        Ocios: Ocios,
        id: Date.now()
    }
    ocios = [...ocios, OciosObj]

    createHTML();
    input.value = '';
}

function createHTML(){
    clearHTML();

    if (ocios.length > 0) {
        ocios.forEach(Ocios => {
            const li = document.createElement('li',);
            li.innerHTML =  Ocios.Ocios + ' <span class="nes-btn" Ocios-id="'+Ocios.id+'">X</span>';
;

            listOcio.appendChild(li);
        });
    }

    storagePreEntrega();
}

function storagePreEntrega(){
    localStorage.setItem('ocios', JSON.stringify(ocios));
}

function showError(){
  Swal.fire({        
                title: "¡Error!",       
              text: "No puedes ingresar algo vacio",      
              icon: "error",      
              button: "Volver a intentar",        
            });

}

function clearHTML(){
    listOcio.innerHTML = '';
}


// Eventlistener para mi switch del Light y Dark Mode

function DarkMode(){
const btnCambiarModo = document.getElementById('cambiarModo')

btnCambiarModo.addEventListener('click', () =>{

    document.body.classList.toggle('dark')
    btnCambiarModo.classList.toggle('active')

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true')
    }
    else{
        localStorage.setItem('dark-mode', 'false')
    }

})

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark')
    btnCambiarModo.classList.add('active')
}
else{
    document.body.classList.remove('dark')
    btnCambiarModo.classList.remove('active')
}


}

// Fetch Sencillo para Desafio const url = "https://pokeapi.co/api/v2/pokemon/76"


    
    function subPoke(){
        event.preventDefault() 
    url = document.getElementById("pokeAvatar").value

fetch("https://pokeapi.co/api/v2/pokemon/" + url)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('element')
        element.innerHTML = `
        <span>Tu PokeAvatar es: ¡¡¡
        ${data.name}
        <img src="${data.sprites.front_default}"> !!!
        <span>
        `
    })

};


//Funciones

establecerFecha()
DarkMode()
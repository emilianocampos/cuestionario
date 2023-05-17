
 let user = {
    name: prompt('Coloque su nombre'),
    age: prompt('Edad')
};


const local = localStorage.setItem("user", JSON.stringify(user));

const localUser = localStorage.getItem('user');


if ((user.name === '' && user.name === '') || (user.name === null && user.name === null)) {
    Swal.fire({
        icon: 'warning',
        title: 'Ingrese datos correspondientes!, Se reiniciara la pagina',


    })


    const modal = document.createElement('div');

    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.zIndex = '9999';

    document.body.appendChild(modal);

    setTimeout(() => {
        location.reload();
    }, 2000)
}


document.getElementById("quizForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener las respuestas seleccionadas
    let a1 = document.querySelector('input[name="question1"]:checked');
    let a2 = document.querySelector('input[name="question2"]:checked');
    let a3 = document.querySelector('input[name="question3"]:checked');
    let a4 = document.querySelector('input[name="question4"]:checked');
    let a5 = document.querySelector('input[name="question5"]:checked');
    let a6 = document.querySelector('input[name="question6"]:checked');
    let a7 = document.querySelector('input[name="question7"]:checked');
    let a8 = document.querySelector('input[name="question8"]:checked');
    let a9 = document.querySelector('input[name="question9"]:checked');
    let a10 = document.querySelector('input[name="question10"]:checked');


    // Verificar si se han seleccionado todas las respuestas
    if (a1 === null || a2 === null || a3 === null || a4 === null || a5 === null || a6 === null || a7 === null || a8 === null || a9 === null || a10 === null) {
        Swal.fire('Debes responder todas las preguntas')
    }

    // Comprobar las respuestas y mostrar el resultado
    let score = 0;

    score += (a1.value === 'c') ? 1 : 0
    score += (a2.value === 'b') ? 1 : 0
    score += (a3.value === 'c') ? 1 : 0
    score += (a4.value === 'a') ? 1 : 0
    score += (a5.value === 'c') ? 1 : 0
    score += (a6.value === 'a') ? 1 : 0
    score += (a7.value === 'c') ? 1 : 0
    score += (a8.value === 'b') ? 1 : 0
    score += (a9.value === 'c') ? 1 : 0
    score += (a10.value === 'a') ? 1 : 0



    if (score <= 10 && score >= 6) {
        Swal.fire({
            icon: 'success',
            title: 'Aprobado! 🧐 ',
            text: 'Felicitaciones: ' + user.name + ', Tu puntaje fue de: ' + score +' / 10',
            
        })
    } else if (score <= 6 && score >= 0)
        Swal.fire({
            icon: 'error',
            title: 'Desaprobado! ☠️ ',
            text: 'F por:  ' + user.name + '  🤣 ' + ', Tu puntaje fue de: ' + score +' / 10',
           

        })

});